import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(req: NextRequest, res: NextResponse) {
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
  const { firstName, lastName, teamName, role } = body;

  try {
    console.log("Data received:", { firstName, lastName, teamName, role });

    await prisma.user.update({
      where: {
        email,
      },
      data: {
        firstName,
        lastName,
        teamName,
        role,
      },
    });

    return NextResponse.json(
      { message: "Profile updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json(
      { message: "Failed to update profile" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  try {
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
        firstName: true,
        lastName: true,
        teamName: true,
        role: true,
      },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
