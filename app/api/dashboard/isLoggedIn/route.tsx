import getUserFromSession from "@/lib/userSession";
import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(_req: NextRequest) {
  const { success, user, error, status } = await getUserFromSession();
  if (!success || !user) {
    return NextResponse.json({ error }, { status: status || 401 });
  }

  const userId = user.id;
  try {
    const existingSpace = await prisma.spaceMember.findFirst({
      where: {
        userId,
      },
      select: {
        user: true,
        space: {
          select: {
            code: true,
          },
        },
      },
    });

    if (existingSpace == null) {
      return NextResponse.json(
        { message: "You are not associated with any space" },
        { status: 409 }
      );
    } else {
      return NextResponse.json({ existingSpace }, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error fetching space details" },
      { status: 500 }
    );
  }
}
