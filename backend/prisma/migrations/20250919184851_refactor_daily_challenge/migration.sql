/*
  Warnings:

  - You are about to drop the `DailyChallengeAttempt` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."DailyChallengeAttempt" DROP CONSTRAINT "DailyChallengeAttempt_challengeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."DailyChallengeAttempt" DROP CONSTRAINT "DailyChallengeAttempt_playerId_fkey";

-- DropTable
DROP TABLE "public"."DailyChallengeAttempt";
