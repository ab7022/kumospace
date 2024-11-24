import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  const session = await getServerSession(NEXT_AUTH_CONFIG);

  if (!session) {
    return NextResponse.json({ error: "Please Login First" }, { status: 401 });
  }
  const email = session.user?.email;

  const { spaceName, url, teamSize, primaryGoal } = body;

  const user = await prisma.user.findUnique({
    where: { email },
  });
  const userId = user?.id;
  if (!email || !userId) {
    return NextResponse.json(
      { error: "Invalid session data" },
      { status: 400 }
    );
  }

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

  // Usage Example
  const newSpaceId = generateSpaceId();
  console.log(newSpaceId); // Outputs something like 'aBcDeF'

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
            email,
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
