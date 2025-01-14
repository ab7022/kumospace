import getUserFromSession from "@/lib/userSession";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function GET(_req: NextRequest) {
  try {
    const { success, user, error, status } = await getUserFromSession();

    if (!success || !user) {
      return NextResponse.json(
        { error: error || "User not authenticated" },
        { status: status || 401 }
      );
    }

    const invites = await prisma.invitation.findMany({
      where: { email: user.email },
      select: { id: true, spaceId: true, role: true },
    });

    if (!invites.length) {
      return NextResponse.json(
        { message: "No invitations found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ invites }, { status: 200 });
  } catch (error) {
    console.error("Error fetching invitations:", error);
    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}


export async function POST(req: NextRequest) {
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

    return NextResponse.json(deletedRequest, { status: 200 });
  } catch (error) {
    console.error("Error deleting invitation:", error);
    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
export async function PUT(req: NextRequest, _res: NextResponse) {
  try {
    const { success, user, error, status } = await getUserFromSession();
    if (!success || !user) {
      return NextResponse.json({ error }, { status: status || 401 });
    }

    const body = await req.json();
    const { requestId } = body;

    if (!requestId) {
      return NextResponse.json(
        { message: "Request ID is required." },
        { status: 400 } // Ensure the second argument is an object with `status` field
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
      { status: 200 } // Ensure the second argument is an object with `status` field
    );
  } catch (error: any) {
    console.error("Error processing join request:", error);
    return NextResponse.json(
      {
        message:
          "An unexpected error occurred while processing the join request.",
        error: error.message || "Internal Server Error",
      },
      { status: 500 } // Ensure the second argument is an object with `status` field
    );
  }
}
