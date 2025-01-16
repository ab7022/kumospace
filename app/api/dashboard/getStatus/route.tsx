import { NextRequest, NextResponse } from "next/server";
import getUserFromSession from "@/lib/userSession";
import prisma from "@/lib/prisma";

export async function GET(_req: NextRequest) {
  try {
    const { success, user, error, status } = await getUserFromSession();

    if (!success || !user) {
      return NextResponse.json(
        { error: error || "User not authenticated" },
        { status: status || 401 }
      );
    }

    // Fetch the current user's space ID
    const userSpaceMember = await prisma.spaceMember.findFirst({
      where: { userId: user.id },
      select: { spaceId: true },
    });

    if (!userSpaceMember) {
      return NextResponse.json(
        { error: "User is not part of any space" },
        { status: 404 }
      );
    }

    // Fetch all users who are in the same space
    const spaceMembers = await prisma.spaceMember.findMany({
      where: { spaceId: userSpaceMember.spaceId },
      select: {
        user: {
          select: {
            id: true,
            name: true,
            status: true,
          },
        },
      },
    });


    
    if (!spaceMembers.length) {
      return NextResponse.json({ error: "No users found in the space" }, { status: 404 });
    }


    // Extract user details
    const userDetails = spaceMembers.map((member) => member.user);

    const statusCount = userDetails.reduce(
      (acc, user) => {
        acc.total += 1;
        if (user.status === "AVAILABLE") acc.active += 1;
        if (user.status === "DND") acc.dnd += 1;
        if (user.status === "AWAY") acc.away += 1;
        return acc;
      },
      { total: 0, active: 0, dnd: 0, away: 0 }
    );
    console.log("Status count:", statusCount);

    return NextResponse.json({ userDetails, statusCount }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user status:", error);
    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}