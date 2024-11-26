import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import getUserFromSession from "@/lib/userSession";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  const { success, user, error, status } = await getUserFromSession();
  if (!success) {
    return NextResponse.json({ error }, { status });
  }
  const { spaceName, url, teamSize, primaryGoal } = body;
  const userId = user?.id;
  if (!user?.isVerified) {
    return NextResponse.json({ error: "User not verified" }, { status: 403 });
  }

  function generateSpaceId() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let spaceId = "";
    for (let i = 0; i < 6; i++) {
      spaceId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return spaceId;
  }
  const newSpaceId = generateSpaceId();
  try {
    const newSpace = await prisma.space.create({
      data: {
        spaceName,
        url,
        teamSize,
        primaryGoal,
        userId,
        spaceId: newSpaceId,
      
        teammembers: {
          create: {
            email: user?.email,
            role: "Owner",
            invitationAccepted: true,
            userId,
          },
        },
      },
    });
    console.log(newSpace);

    return NextResponse.json({ newSpace }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error Creating Space" },
      { status: 500 }
    );
  }
}
