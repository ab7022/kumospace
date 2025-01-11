import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import getUserFromSession from "@/lib/userSession";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { success, user, status } = await getUserFromSession();

    if (!success || !user) {
      return NextResponse.json({ error: "Authentication failed." }, { status });
    }

    const { spaceCode, email } = body;

    if (!spaceCode || !email) {
      return NextResponse.json(
        { error: "Space code and email are required." },
        { status: 400 }
      );
    }

    const searchSpace = await prisma.space.findUnique({
      where: {
        code: spaceCode,
        createdBy: email,
      },
      select: {
        id: true,
      },
    });

    if (!searchSpace) {
      return NextResponse.json(
        {
          error:
            "Space not found. Please check the space code and admin email.",
        },
        { status: 404 }
      );
    }
    const searchMember = await prisma.spaceMember.findFirst({
      where: {
        spaceId: searchSpace.id,
        email: user.email,
      },
    });

    if (searchMember) {
      return NextResponse.json(
        { error: "You are already a member of this space." },
        { status: 400 }
      );
    }
    const invitation = await prisma.joinRequest.create({
      data: {
        spaceId: searchSpace.id,
        name: user.name,
        email: user.email,
        userId: user.id,
      },
    });

    return NextResponse.json(
      { message: "Invitation request sent successfully!", invitation },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
