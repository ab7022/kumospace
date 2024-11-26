import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { use } from "react";
const prisma = new PrismaClient();
export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const session = await getServerSession(NEXT_AUTH_CONFIG);
    if (!session) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const email = session.user?.email;
    if (!email) {
      return NextResponse.json(
        { error: "Email not found in session" },
        { status: 400 }
      );
    }

    // Find the user based on session email
    const user = await prisma.user.findUnique({
      where: {
        email: email as string,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }
  const { timezone, workHoursFrom, workHoursTo } = body;

  try {
    // Update the user settings in the database using Prisma
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        timezone,
        workHoursFrom,
        workHoursTo,
      },
    });

    // Return the updated user
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update user setting" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
    const session = await getServerSession(NEXT_AUTH_CONFIG);
    if (!session) {
        return NextResponse.json(
            { success: false, error: "Unauthorized" },
            { status: 401 }
        );
    }

    const email = session.user?.email;
    if (!email) {
        return NextResponse.json(
            { error: "Email not found in session" },
            { status: 400 }
        );
    }

    // Find the user based on session email
    const user = await prisma.user.findUnique({
        where: {
            email: email as string,
        },
    });

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    // Return the user settings
    return NextResponse.json(
        {
            timezone: user.timezone,
            workHoursFrom: user.workHoursFrom,
            workHoursTo: user.workHoursTo,
        },
        { status: 200 }
    );
}
