import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";

const prisma = new PrismaClient();
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

  const user = await prisma.user.findUnique({
    where: {
      email: email as string,
    },
  });
  if (!email) {
    return NextResponse.json(
      { error: "Email not found in session" },
      { status: 400 }
    );
  }

  const tasks = await prisma.task.findMany({
    where: { userId: user?.id, completed: false },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ success: true, tasks }, { status: 200 });
}

export async function POST(req: NextRequest, res: NextResponse) {
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

  const user = await prisma.user.findUnique({
    where: {
      email: email as string,
    },
  });
  if (!email) {
    return NextResponse.json(
      { error: "Email not found in session" },
      { status: 400 }
    );
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

  const user = await prisma.user.findUnique({
    where: {
      email: email as string,
    },
  });
  if (!email) {
    return NextResponse.json(
      { error: "Email not found in session" },
      { status: 400 }
    );
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
