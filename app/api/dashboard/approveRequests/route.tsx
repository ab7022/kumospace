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
    const { requestId } = body;

    if (!requestId) {
      return NextResponse.json(
        { message: "Request ID is required." },
        { status: 400 }
      );
    }

    const joinRequest = await prisma.joinRequest.findUnique({
      where: { id: requestId },
      select: {
        id: true,
        userId: true,
        spaceId: true,
        email: true,
        name: true,
      },
    });

    if (!joinRequest) {
      return NextResponse.json(
        { message: "Invalid Join Request." },
        { status: 400 }
      );
    }

    const newMember = await prisma.spaceMember.create({
      data: {
        joinedAt: new Date(),
        email: joinRequest.email,
        spaceId: joinRequest.spaceId,
        userId: joinRequest.userId,
      },
    });

    if (!newMember) {
      return NextResponse.json(
        { message: "Failed to approve member." },
        { status: 500 }
      );
    }

    const deletedRequest = await prisma.joinRequest.delete({
      where: { id: requestId },
    });

    if (!deletedRequest) {
      return NextResponse.json(
        { message: "Failed to delete the join request." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Member Approved." }, { status: 200 });
  } catch (error: any) {
    console.error("Error processing join request:", error);

    return NextResponse.json(
      {
        message:
          "An unexpected error occurred while processing the join request.",
        error: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const { success, user, error, status } = await getUserFromSession();
    if (!success || !user) {
      return NextResponse.json({ error }, { status });
    }

    const body = await req.json();
    const { requestId } = body;

    if (!requestId) {
      return NextResponse.json(
        { message: "Request ID is required." },
        { status: 400 }
      );
    }

    const deletedRequest = await prisma.joinRequest.delete({
      where: { id: requestId },
    });

    if (!deletedRequest) {
      return NextResponse.json(
        { message: "Failed to decline the join request." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Joining Request Declined." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing join request:", error);

    return NextResponse.json(
      {
        message:
          "An unexpected error occurred while processing the join request.",
        error: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
