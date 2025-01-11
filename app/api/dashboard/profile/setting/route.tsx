import { NextRequest, NextResponse } from "next/server";
import getUserFromSession from "@/lib/userSession";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest,  NextResponse:any) {
  const body = await req.json();
  const { success, user, error, status } = await getUserFromSession();
  if (!success || !user) {
    return NextResponse.json({ error }, { status });
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
    return NextResponse.json(
      { error: "Failed to update user setting" },
      { status: 500 }
    );
  }
}

export async function GET( NextResponse:any) {
  const { success, user, error, status } = await getUserFromSession();
  if (!success || !user) {
    return NextResponse.json({ error }, { status });
  }
  return NextResponse.json(
    {
      timezone: user.timezone,
      workHoursFrom: user.workHoursFrom,
      workHoursTo: user.workHoursTo,
    },
    { status: 200 }
  );
}
