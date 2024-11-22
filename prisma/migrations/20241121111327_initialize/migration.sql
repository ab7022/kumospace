-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "profile_url" TEXT,
    "username" TEXT,
    "premium_user" BOOLEAN NOT NULL DEFAULT false,
    "validTill" TIMESTAMP(3),
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "trialEndsAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP + INTERVAL '14 days',
    "provider" TEXT NOT NULL,
    "isdetailsubmitted" BOOLEAN NOT NULL DEFAULT false,
    "isUserValid" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE INDEX "email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "username_idx" ON "User"("username");
