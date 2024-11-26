import { NextRequest, NextResponse } from "next/server";

import getUserFromSession from "@/lib/userSession";
import prisma from "@/lib/prisma";
export async function GET(req: NextRequest, res: NextResponse) {
  const { success, user, error, status } = await getUserFromSession();
  if (!success) {
    return NextResponse.json({ error }, { status });
  }
  const tasks = await prisma.task.findMany({
    where: { userId: user?.id, completed: false },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ success: true, tasks }, { status: 200 });
}

export async function POST(req: NextRequest, res: NextResponse) {
  const { success, user, error, status } = await getUserFromSession();
  if (!success) {
    return NextResponse.json({ error }, { status });
  }
  const body = await req.json();
  const { taskName, priority, dueDate } = body;
  if (!taskName) {
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
      taskName,
      priority,
      userId: user.id,
      dueDate,
    },
  });

  return NextResponse.json({ success: true, task }, { status: 200 });
}
export async function PATCH(req: NextRequest, res: NextResponse) {
  const { success, user, error, status } = await getUserFromSession();
  if (!success) {
    return NextResponse.json({ error }, { status });
  }
  const body = await req.json();
  const { taskId } = body;

  const updatedTask = await prisma.task.update({
    where: { userId: user?.id, id: taskId },
    data: { completed: true },
  });

  return NextResponse.json(
    { success: true, task: updatedTask },
    { status: 200 }
  );
}
