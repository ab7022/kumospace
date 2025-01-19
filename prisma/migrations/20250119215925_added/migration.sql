-- AlterTable
ALTER TABLE "AssignedTasks" ADD COLUMN     "status" TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "trialEndsAt" SET DEFAULT CURRENT_TIMESTAMP + INTERVAL '14 days';
