-- AlterTable
ALTER TABLE "Space" ALTER COLUMN "spaceId" SET DEFAULT substr(md5(random()::text), 1, 6),
ALTER COLUMN "teamSize" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "trialEndsAt" SET DEFAULT CURRENT_TIMESTAMP + INTERVAL '14 days';
