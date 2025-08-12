/*
  Warnings:

  - You are about to drop the column `combo` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `Session` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Session" DROP COLUMN "combo",
DROP COLUMN "score";
