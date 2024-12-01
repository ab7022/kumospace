import getUserFromSession from "@/lib/userSession";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function GET(req: NextRequest, res: NextResponse) {
  const { success, user, error, status } = await getUserFromSession();
  if (!success || !user) {
    return NextResponse.json({ error }, { status });
  }
  const userId = user.id;
  try {
    const existingSpace = await prisma.spaceMember.findFirst({
      where: {
        userId,
      },
      select: {
        user:true,
      },
    });
    if (existingSpace == null) {
      return NextResponse.json(
        { message: "You are not associated with any of space" },
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
