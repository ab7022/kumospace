import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";

const prisma = new PrismaClient(); 

export async function POST(req: NextRequest,res: NextResponse) {
  try {
    const session = await getServerSession(NEXT_AUTH_CONFIG);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const email = session.user?.email;

    if (!email) {
      return NextResponse.json(
        { error: "Email not found in session" },
        { status: 400 }
      );
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
        email,
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
    const session = await getServerSession(NEXT_AUTH_CONFIG);    
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const email = session.user?.email;
    if (!email) {
      return NextResponse.json(
        { error: "Email not found in session" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        onCurrentlyWorking: true,
        status: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
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

