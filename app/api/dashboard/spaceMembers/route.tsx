import getUserFromSession from "@/lib/userSession";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET( NextRequest:any): Promise<NextResponse> {
  try {
    const { success, user, error, status } = await getUserFromSession();

    if (!success || !user) {
      return NextResponse.json(
        { error: error || "User not authenticated" },
        { status }
      );
    }

    const mySpace = await prisma.spaceMember.findFirst({
      where: { email: user.email },
      select: { id: true, role: true, spaceId: true },
    });

    if (!mySpace) {
      return NextResponse.json(
        { message: "You have not received any invitation yet." },
        { status: 400 }
      );
    }

    const mySpaceMembers = await prisma.spaceMember.findMany({
      where: { spaceId: mySpace.spaceId },
      select: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            profileUrl: true,
            name: true,
            status:true,
            designation: true,
            teamName: true,
          },
        },
      },
    });

    if (!mySpaceMembers.length) {
      return NextResponse.json({ message: "No members found.", status: 404 });
    }

    return NextResponse.json({ mySpaceMembers }, { status: 200 });
  } catch (error) {
    console.error("Error fetching invitation:", error);
    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
