import { NextRequest, NextResponse } from "next/server";
import getUserFromSession from "@/lib/userSession";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { success, user, error, status } = await getUserFromSession();
    if (!success || !user) {
      return NextResponse.json({ error }, { status: status || 401 });
    }

    const body = await req.json();
    const { firstName, lastName, teamName, designation } = body;

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        firstName,
        lastName,
        teamName,
        designation,
      },
    });

    return NextResponse.json(
      { message: "Profile updated successfully" },
      { status: 200 } // Correct status for successful update
    );
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json(
      { message: "Failed to update profile" },
      { status: 500 } // Server error for failed update
    );
  }
}

export async function GET(_req: NextRequest) {
  try {
    const { success, user, error, status } = await getUserFromSession();
    if (!success || !user) {
      return NextResponse.json({ error }, { status: status || 401 });
    }

    const user1 = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        firstName: true,
        lastName: true,
        teamName: true,
        designation: true,
      },
    });

    return NextResponse.json(user1, { status: 200 }); // Return user details with 200 status
  } catch (error) {
    console.error("Error fetching user details:", error);
    return NextResponse.json(
      { message: "Failed to fetch user details" },
      { status: 500 } // Return server error status
    );
  }
}
