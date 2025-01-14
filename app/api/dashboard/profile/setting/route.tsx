import { NextRequest, NextResponse } from "next/server";
import getUserFromSession from "@/lib/userSession";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { success, user, error, status } = await getUserFromSession();
  if (!success || !user) {
    return NextResponse.json({ error }, { status: status || 401 });
  }
  const { timezone, workHoursFrom, workHoursTo } = body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        timezone,
        workHoursFrom,
        workHoursTo,
      },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update user setting" },
      { status: 500 }
    );
  }
}

export async function GET(_req: NextRequest) {
  const { success, user, error, status } = await getUserFromSession();
  if (!success || !user) {
    return NextResponse.json({ error }, { status: status || 401 });
  }

  // Ensure that the data is in the expected format
  const userSettings = {
    timezone: user.timezone,
    workHoursFrom: user.workHoursFrom,
    workHoursTo: user.workHoursTo,
  };

  return NextResponse.json(userSettings, { status: 200 });
}