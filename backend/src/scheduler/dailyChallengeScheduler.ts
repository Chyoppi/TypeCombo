import cron from "node-cron";
import prisma from "../prisma";

// Picks random sentence from Sentence table
async function getRandomSentenceFromDB(): Promise<string> {
  const sentences = await prisma.sentence.findMany();
  if (sentences.length === 0) {
    throw new Error("No sentences in the database");
  }
  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex].text;
}

// Sets a new daily challenge for today
export async function setDailyChallenge() {
  try {
    const text = await getRandomSentenceFromDB();

    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    await prisma.dailyChallenge.upsert({
      where: { date: today },
      update: { text },
      create: { date: today, text },
    });

    console.log("Daily challenge set for", today.toISOString().split("T")[0]);
  } catch (err) {
    console.error("[DailyChallenge] Failed to set daily challenge:", err);
  }
}

export function dailyChallengeScheduler() {
  cron.schedule("0 0 * * *", setDailyChallenge, {
    timezone: "UTC",
  });
  console.log("Scheduler started (runs at 00:00 UTC daily)");
}
