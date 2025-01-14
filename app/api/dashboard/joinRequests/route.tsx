import getUserFromSession from "@/lib/userSession";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(_req: NextRequest) {
  try {
    const { success, user, error, status } = await getUserFromSession();
    if (!success || !user) {
      return NextResponse.json({ error }, { status: status || 401 });
    }

    const space = await prisma.space.findFirst({
      where: {
        userId: user.id,
      },
      select: {
        id: true,
      },
    });

    if (!space) {
      return NextResponse.json(
        { message: "You are not associated with any space." },
        { status: 400 }
      );
    }

    const existingInvites = await prisma.joinRequest.findMany({
      where: {
        spaceId: space.id,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    if (existingInvites.length > 0) {
      return NextResponse.json({ existingInvites }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "No invites found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching join requests:", error);
    return NextResponse.json(
      { message: "An error occurred while processing the join requests." },
      { status: 500 }
    );
  }
}
