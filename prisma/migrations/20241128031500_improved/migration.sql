/*
  Warnings:

  - You are about to drop the column `deadline` on the `Deadline` table. All the data in the column will be lost.
  - You are about to drop the column `deadlineDescription` on the `Deadline` table. All the data in the column will be lost.
  - You are about to drop the column `deadlineTitle` on the `Deadline` table. All the data in the column will be lost.
  - You are about to drop the column `reminderDescription` on the `Reminder` table. All the data in the column will be lost.
  - You are about to drop the column `reminderTime` on the `Reminder` table. All the data in the column will be lost.
  - You are about to drop the column `reminderTitle` on the `Reminder` table. All the data in the column will be lost.
  - You are about to drop the column `spaceCode` on the `Space` table. All the data in the column will be lost.
  - You are about to drop the column `spaceName` on the `Space` table. All the data in the column will be lost.
  - You are about to drop the column `taskName` on the `Task` table. All the data in the column will be lost.
  - The `dueDate` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `teamName` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `teamId` on the `TeamMember` table. All the data in the column will be lost.
  - You are about to drop the column `premium_user` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profile_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `teamName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectAssignment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TeamMembers` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[code]` on the table `Space` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code,userId]` on the table `Space` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[spaceId,userId]` on the table `TeamMember` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `date` to the `Deadline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Deadline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Deadline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Reminder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Reminder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Reminder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `teamSize` on the `Space` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `name` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spaceId` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `TeamMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spaceId` to the `TeamMember` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_userId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectAssignment" DROP CONSTRAINT "ProjectAssignment_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectAssignment" DROP CONSTRAINT "ProjectAssignment_teamId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectAssignment" DROP CONSTRAINT "ProjectAssignment_userId_fkey";

-- DropForeignKey
ALTER TABLE "TeamMember" DROP CONSTRAINT "TeamMember_teamId_fkey";

-- DropForeignKey
ALTER TABLE "TeamMembers" DROP CONSTRAINT "TeamMembers_spaceId_fkey";

-- DropForeignKey
ALTER TABLE "TeamMembers" DROP CONSTRAINT "TeamMembers_userId_fkey";

-- DropIndex
DROP INDEX "Space_spaceCode_key";

-- DropIndex
DROP INDEX "Space_spaceCode_userId_key";

-- DropIndex
DROP INDEX "TeamMember_userId_teamId_key";

-- AlterTable
ALTER TABLE "Deadline" DROP COLUMN "deadline",
DROP COLUMN "deadlineDescription",
DROP COLUMN "deadlineTitle",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reminder" DROP COLUMN "reminderDescription",
DROP COLUMN "reminderTime",
DROP COLUMN "reminderTitle",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Space" DROP COLUMN "spaceCode",
DROP COLUMN "spaceName",
ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
DROP COLUMN "teamSize",
ADD COLUMN     "teamSize" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "taskName",
ADD COLUMN     "name" TEXT NOT NULL,
DROP COLUMN "dueDate",
ADD COLUMN     "dueDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "teamName",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "spaceId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TeamMember" DROP COLUMN "teamId",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "spaceId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "premium_user",
DROP COLUMN "profile_url",
DROP COLUMN "teamName",
ADD COLUMN     "premiumUser" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "profileUrl" TEXT,
ALTER COLUMN "trialEndsAt" SET DEFAULT CURRENT_TIMESTAMP + INTERVAL '14 days';

-- DropTable
DROP TABLE "Notification";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "ProjectAssignment";

-- DropTable
DROP TABLE "TeamMembers";

-- CreateTable
CREATE TABLE "SpaceMember" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'MEMBER',
    "joinedAt" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,
    "spaceId" INTEGER NOT NULL,

    CONSTRAINT "SpaceMember_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SpaceMember_email_spaceId_key" ON "SpaceMember"("email", "spaceId");

-- CreateIndex
CREATE UNIQUE INDEX "Space_code_key" ON "Space"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Space_code_userId_key" ON "Space"("code", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "TeamMember_spaceId_userId_key" ON "TeamMember"("spaceId", "userId");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpaceMember" ADD CONSTRAINT "SpaceMember_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpaceMember" ADD CONSTRAINT "SpaceMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamMember" ADD CONSTRAINT "TeamMember_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
