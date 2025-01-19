import { NextRequest, NextResponse } from "next/server";
import getUserFromSession from "@/lib/userSession";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { success, user, error, status } = await getUserFromSession();

    if (!success || !user) {
      return NextResponse.json(
        { error: error || "User not authenticated" },
        { status: status || 401 }
      );
    }
    const body = await req.json();
    if (!body.title || !body.description || !body.assignee) {
      return NextResponse.json(
        { error: "Title, description and assignee are required" },
        { status: 400 }
      );
    }
    console.log("body", body);
    // Fetch the current user's space ID
    const spaceId = await prisma.spaceMember.findFirst({
      where: { userId: user.id },
      select: { spaceId: true },
    });

    if (!spaceId) {
      return NextResponse.json(
        { error: "User is not part of any space" },
        { status: 404 }
      );
    }
    const findUser = await prisma.user.findFirstOrThrow({
      where: { email: body.assignee },
      select: { id: true },
    });
    console.log("assigning email", body.assignee);
    console.log("assigned user", findUser);
    if (!findUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const assignedTask = await prisma.assignedTasks.create({
      data: {
        userId: findUser.id,
        taskTitle: body.title,
        taskDescription: body.description,
        spaceId: spaceId.spaceId,
        status: "PENDING",
      },
    });
    console.log(assignedTask);
    return NextResponse.json(assignedTask, { status: 200 });
  } catch (error) {
    console.error("Error fetching user status:", error);
    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { success, user, error, status } = await getUserFromSession();

    if (!success || !user) {
      return NextResponse.json(
        { error: error || "User not authenticated" },
        { status: status || 401 }
      );
    }

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

    const tasks = await prisma.assignedTasks.findMany({
      where: { spaceId: userSpaceMember.spaceId },
      include: {
        user: {
          select: {
            name: true,
            profileUrl: true,
            email: true,
          },
        },
      },
    });
    console.log(tasks);
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { success, user, error, status } = await getUserFromSession();

    if (!success || !user) {
      return NextResponse.json(
        { error: error || "User not authenticated" },
        { status: status || 401 }
      );
    }
    const body = await req.json();
    const taskId = body.taskId;
    const task = await prisma.assignedTasks.update({
      where: { id: taskId },
      data: {
        status: "COMPLETED",
      },
    });

    console.log(task);
    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
