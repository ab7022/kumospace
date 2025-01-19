/*
  Warnings:

  - You are about to drop the column `taskId` on the `AssignedTasks` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "AssignedTasks_taskId_userId_key";

-- AlterTable
ALTER TABLE "AssignedTasks" DROP COLUMN "taskId",
ADD COLUMN     "taskDescription" TEXT,
ADD COLUMN     "taskTitle" TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "trialEndsAt" SET DEFAULT CURRENT_TIMESTAMP + INTERVAL '14 days';
