/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Player` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Player" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Player_email_key" ON "public"."Player"("email");
