import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import getUserFromSession from "@/lib/userSession";
export async function POST(req: NextRequest, NextResponse:any) {
  try {
    const { success, user, error, status } = await getUserFromSession();
    if (!success || !user) {
      return NextResponse.json({ error }, { status });
    }

    const body = await req.json();
    const { task, availability } = body;

    if (!task && !availability) {
      return NextResponse.json(
        { error: "Task or availability are required." },
        { status: 400 }
      );
    }
    const updatedUser = await prisma.user.update({
      where: {
        id:user.id,
      },
      data: {
        onCurrentlyWorking: task,
        status: availability,
      },
    });

    return NextResponse.json({
      message: "Status updated successfully!",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user status:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect(); 
  }
}

export async function GET(req: NextRequest) {  
  try {
    const { success, user, error, status } = await getUserFromSession();
    if (!success || !user) {
      return NextResponse.json({ error }, { status });
    }
    return NextResponse.json({
      task: user.onCurrentlyWorking || "",
      availability: user.status || "AVAILABLE",
    });
  } catch (error) {
    console.error("Error fetching daily status:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching daily status" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

