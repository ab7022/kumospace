/*
  Warnings:

  - A unique constraint covering the columns `[spaceId]` on the table `Space` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Space" ALTER COLUMN "spaceId" SET DEFAULT substr(md5(random()::text), 1, 6),
ALTER COLUMN "spaceId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "trialEndsAt" SET DEFAULT CURRENT_TIMESTAMP + INTERVAL '14 days';

-- CreateIndex
CREATE UNIQUE INDEX "Space_spaceId_key" ON "Space"("spaceId");
