/*
  Warnings:

  - You are about to drop the column `sentence` on the `DailyChallenge` table. All the data in the column will be lost.
  - Added the required column `text` to the `DailyChallenge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."DailyChallenge" DROP COLUMN "sentence",
ADD COLUMN     "text" TEXT NOT NULL;
