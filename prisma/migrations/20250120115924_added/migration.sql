/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `SpaceMember` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "trialEndsAt" SET DEFAULT CURRENT_TIMESTAMP + INTERVAL '14 days';

-- CreateIndex
CREATE UNIQUE INDEX "SpaceMember_email_key" ON "SpaceMember"("email");
