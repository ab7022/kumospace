-- AlterTable
ALTER TABLE "Space" ALTER COLUMN "spaceId" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "trialEndsAt" SET DEFAULT CURRENT_TIMESTAMP + INTERVAL '14 days';
