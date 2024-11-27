/*
  Warnings:

  - You are about to drop the column `spaceId` on the `Space` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[spaceCode]` on the table `Space` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[spaceCode,userId]` on the table `Space` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `spaceCode` to the `Space` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Space_spaceId_key";

-- DropIndex
DROP INDEX "Space_spaceId_userId_key";

-- AlterTable
ALTER TABLE "Space" DROP COLUMN "spaceId",
ADD COLUMN     "spaceCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "trialEndsAt" SET DEFAULT CURRENT_TIMESTAMP + INTERVAL '14 days';

-- CreateIndex
CREATE UNIQUE INDEX "Space_spaceCode_key" ON "Space"("spaceCode");

-- CreateIndex
CREATE UNIQUE INDEX "Space_spaceCode_userId_key" ON "Space"("spaceCode", "userId");
