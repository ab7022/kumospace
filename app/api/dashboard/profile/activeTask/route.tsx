import { NextRequest, NextResponse } from "next/server";
import getUserFromSession from "@/lib/userSession";
import prisma from "@/lib/prisma";

export async function GET(_req: NextRequest) {
  try {
    const { success, user, error, status } = await getUserFromSession();
    if (!success) {
      return NextResponse.json({ error }, { status: status || 401 });
    }

    const tasks = await prisma.task.findMany({
      where: { userId: user?.id, completed: false },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, tasks }, { status: 200 });
  } catch (error) {
    console.error("Error fetching active tasks:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching tasks." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { success, user, error, status } = await getUserFromSession();
    if (!success) {
      return NextResponse.json({ error }, { status: status || 401 });
    }

    const body = await req.json();
    const { name, priority, dueDate } = body;
    if (!name) {
      return NextResponse.json(
        { error: "Task name is required" },
        { status: 400 }
      );
    }

    if (!user?.id) {
      return NextResponse.json({ error: "User ID not found" }, { status: 400 });
    }

    const task = await prisma.task.create({
      data: {
        name,
        priority,
        userId: user.id,
        dueDate,
      },
    });

    return NextResponse.json({ success: true, task }, { status: 200 });
  } catch (error) {
    console.error("Error creating task:", error);
    return NextResponse.json(
      { error: "An error occurred while creating the task." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { success, user, error, status } = await getUserFromSession();
    if (!success) {
      return NextResponse.json({ error }, { status: status || 401 });
    }

    const body = await req.json();
    const { taskId } = body;

    if (!taskId) {
      return NextResponse.json(
        { error: "Task ID is required" },
        { status: 400 }
      );
    }

    const updatedTask = await prisma.task.update({
      where: { userId: user?.id, id: taskId },
      data: { completed: true },
    });

    return NextResponse.json(
      { success: true, task: updatedTask },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating task:", error);
    return NextResponse.json(
      { error: "An error occurred while updating the task." },
      { status: 500 }
    );
  }
}
