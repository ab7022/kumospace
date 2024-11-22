-- AlterTable
ALTER TABLE "TeamMember" ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'member';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "trialEndsAt" SET DEFAULT CURRENT_TIMESTAMP + INTERVAL '14 days';
