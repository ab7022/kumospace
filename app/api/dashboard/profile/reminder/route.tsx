import getUserFromSession from "@/lib/userSession";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function POST(req: NextRequest,  NextResponse:any) {
  try {
    const { success, user, error, status } = await getUserFromSession();
    if (!success || !user) {
      return NextResponse.json({ error }, { status });
    }
    const body = await req.json();
    const { title, description, time } = body;
    if (!title || !time || !user.id) {
      return NextResponse.json(
        { error: "All Fields are required" },
        { status: 400 }
      );
    }
    const today = new Date();

    // Extract today's year, month, and date
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(today.getDate()).padStart(2, "0");
    const reminderTime = new Date(`${year}-${month}-${day}T${time}:00`);
    if (isNaN(reminderTime.getTime())) {
      return NextResponse.json(
        { error: "Invalid time format" },
        { status: 400 }
      );
    }

    const newReminder = await prisma.reminder.create({
      data: {
        title,
       description,
        time: reminderTime,
        userId: user.id,
      },
    });

    return NextResponse.json({ newReminder }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET( NextResponse:any) {
  try {
    const { success, user, error, status } = await getUserFromSession();
    if (!success || !user) {
      return NextResponse.json({ error }, { status });
    }
    const reminders = await prisma.reminder.findMany({
      where: {
        userId: user.id,
      },
      include: {
        user : true,
      },
    });

    return NextResponse.json(reminders, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
export async function PUT(req: NextRequest,  NextResponse:any) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Reminder ID is required" },
      { status: 400 }
    );
  }
  try {
    const { success, user, error, status } = await getUserFromSession();
    if (!success || !user) {
      return NextResponse.json({ error }, { status });
    }
    const deletedReminder = await prisma.reminder.delete({
      where: {
        userId: user.id,
        id: parseInt(id),
      },
    });

    return NextResponse.json(deletedReminder, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
