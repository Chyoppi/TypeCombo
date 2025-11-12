-- CreateTable
CREATE TABLE "public"."DailyChallenge" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "sentence" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DailyChallenge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DailyChallengeAttempt" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "challengeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DailyChallengeAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DailyChallenge_date_key" ON "public"."DailyChallenge"("date");

-- CreateIndex
CREATE UNIQUE INDEX "DailyChallengeAttempt_playerId_challengeId_key" ON "public"."DailyChallengeAttempt"("playerId", "challengeId");

-- AddForeignKey
ALTER TABLE "public"."DailyChallengeAttempt" ADD CONSTRAINT "DailyChallengeAttempt_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "public"."Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DailyChallengeAttempt" ADD CONSTRAINT "DailyChallengeAttempt_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "public"."DailyChallenge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
