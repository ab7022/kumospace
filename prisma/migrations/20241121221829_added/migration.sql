/*
  Warnings:

  - You are about to drop the column `isUserValid` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isdetailsubmitted` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "isUserValid",
DROP COLUMN "isdetailsubmitted",
ADD COLUMN     "hasSubmittedDetails" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "trialEndsAt" SET DEFAULT CURRENT_TIMESTAMP + INTERVAL '14 days';

-- CreateTable
CREATE TABLE "Space" (
    "id" SERIAL NOT NULL,
    "spaceName" TEXT NOT NULL,
    "spaceId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "teamSize" INTEGER NOT NULL,
    "primaryGoal" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Space_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamMember" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "invitationAccepted" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    "spaceId" INTEGER NOT NULL,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TeamMember_email_spaceId_key" ON "TeamMember"("email", "spaceId");

-- AddForeignKey
ALTER TABLE "Space" ADD CONSTRAINT "Space_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamMember" ADD CONSTRAINT "TeamMember_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamMember" ADD CONSTRAINT "TeamMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
