import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import getUserFromSession from "@/lib/userSession";

export async function POST(req: NextRequest,  NextResponse:any) {
  const body = await req.json();
  const { success, user, error, status } = await getUserFromSession();
  if (!success) {
    return NextResponse.json({ error }, { status });
  }
  const { spaceName, url, teamSize, primaryGoal } = body;
  if (!user?.isVerified) {
    return NextResponse.json({ error: "User not verified" }, { status: 403 });
  }
  const userId = user.id;

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
        name: spaceName,
        url,
        createdBy: user?.email,
        teamSize,
        primaryGoal,
        userId,
        code: newSpaceId,
        members: {
          create: {
            email: user?.email,
            role: "ADMIN",
            userId,
          },
        },
      },
    });

    return NextResponse.json({ newSpace }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error Creating Space" },
      { status: 500 }
    );
  }
}

export async function GET( NextResponse:any) {
  const { success, user, error, status } = await getUserFromSession();
  if (!success || !user) {
    return NextResponse.json({ error }, { status });
  }
  const userId = user.id;
  try {
    const existingSpace = await prisma.space.findFirst({
      where: {
        userId,
      },
    });
    if (existingSpace == null) {
      return NextResponse.json(
        { message: "Space already exists" },
        { status: 409 }
      );
    } else {
      return NextResponse.json({ existingSpace }, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error Creating Space" },
      { status: 500 }
    );
  }
}
