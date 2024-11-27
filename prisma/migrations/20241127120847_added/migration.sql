/*
  Warnings:

  - You are about to drop the column `teamId` on the `TeamInvitation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[spaceId,email]` on the table `TeamInvitation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `spaceId` to the `TeamInvitation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TeamInvitation" DROP CONSTRAINT "TeamInvitation_teamId_fkey";

-- DropIndex
DROP INDEX "TeamInvitation_teamId_email_key";

-- AlterTable
ALTER TABLE "TeamInvitation" DROP COLUMN "teamId",
ADD COLUMN     "spaceId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "trialEndsAt" SET DEFAULT CURRENT_TIMESTAMP + INTERVAL '14 days';

-- CreateIndex
CREATE UNIQUE INDEX "TeamInvitation_spaceId_email_key" ON "TeamInvitation"("spaceId", "email");

-- AddForeignKey
ALTER TABLE "TeamInvitation" ADD CONSTRAINT "TeamInvitation_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
