import getUserFromSession from "@/lib/userSession";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function GET( NextResponse:any) {
  try {
    const { success, user, error, status } = await getUserFromSession();
    if (!success || !user) {
      return NextResponse.json({ error }, { status });
    }

    const invitations = await prisma.invitation.findFirst({
      where: {
        email: user.email,
      },
      select: {
        id: true,
        role: true,
        spaceId: true,
      },
    });
    if (!invitations) {
      return NextResponse.json(
        { message: "you have not received any invitation yet." },
        { status: 400 }
      );
    }
    const space = await prisma.space.findFirst({
      where: {
        id: invitations.spaceId,
      },
      select: {
        id: true,
        name: true,
      },
    });
    if (!space) {
      return NextResponse.json({ message: "Space not found" }, { status: 404 });
    }
    return NextResponse.json({ invitations, space }, { status: 200 });
  } catch (error) {
    console.error("Error Fetching Invitation:", error);
    return NextResponse.json(
      { message: "An error occurred while processing the invitation." },
      { status: 500 }
    );
  }
}

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

    const joinRequest = await prisma.invitation.findUnique({
      where: { id: requestId },
      select: {
        id: true,
        spaceId: true,
        email: true,
        role: true,
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
        role: joinRequest.role,
        email: joinRequest.email,
        spaceId: joinRequest.spaceId,
        userId: user.id,
      },
    });

    if (!newMember) {
      return NextResponse.json(
        { message: "Failed to accept invitation." },
        { status: 500 }
      );
    }

    const deletedRequest = await prisma.invitation.delete({
      where: { id: requestId },
    });

    if (!deletedRequest) {
      return NextResponse.json(
        { message: "Failed to delete the join request." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Invitation accepted." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing join request:", error);

    return NextResponse.json(
      {
        message:
          "An unexpected error occurred while processing the accept request.",
        error: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
export async function PUT(req: NextRequest,  NextResponse:any) {
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

    const deletedRequest = await prisma.invitation.delete({
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
