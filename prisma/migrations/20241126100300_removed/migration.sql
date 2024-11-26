/*
  Warnings:

  - You are about to drop the column `reminderDate` on the `Reminder` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Reminder" DROP COLUMN "reminderDate";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "trialEndsAt" SET DEFAULT CURRENT_TIMESTAMP + INTERVAL '14 days';
