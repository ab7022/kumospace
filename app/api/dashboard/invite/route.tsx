import getUserFromSession from "@/lib/userSession";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { success, user, error, status } = await getUserFromSession();
    if (!success || !user) {
      return NextResponse.json({ error }, { status });
    }

    const body = await req.json();
    const { email, role } = body;

    if (!email) {
      return NextResponse.json(
        { message: "Email and role are required." },
        { status: 400 }
      );
    }
    const existingMember = await prisma.spaceMember.findFirst({
      where: {
        email,
      },
    });

    if (existingMember) {
      return NextResponse.json(
        { message: "User is already a member of this team." },
        { status: 409 }
      );
    }
    const space = await prisma.spaceMember.findFirst({
      where: {
        userId: user.id,
      },
      select: {
        id: true,
        spaceId: true,
      },
    });

    if (!space) {
      return NextResponse.json(
        { message: "You are not associated with any space." },
        { status: 400 }
      );
    }

    const newMember = await prisma.invitation.create({
      data: {
        email,
        spaceId: space.spaceId,
        role: role.toUpperCase() || "MEMBER",
        
      },
    });

    return NextResponse.json(
      {
        message: "User invited successfully.",
        teamMember: newMember,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error inviting user:", error);
    return NextResponse.json(
      { message: "An error occurred while processing the invitation." },
      { status: 500 }
    );
  }
}
export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { success, user, error, status } = await getUserFromSession();
    if (!success || !user) {
      return NextResponse.json({ error }, { status });
    }
    const space = await prisma.space.findFirst({
      where: {
       userId:user.id
      },
      select: {
        id: true,
      },
    });
    if (!space) {
      return NextResponse.json(
        { message: "You are not associated with any space." },
        { status: 400 }
      );
    }
    const existingInvites = await prisma.invitation.findMany({
      where: {
        spaceId: space.id,
      },
      select:{
        id:true,
        email:true,
        invitedAt:true
      }
    });

    if (existingInvites) {
      
      return NextResponse.json({ existingInvites }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "No invites found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error inviting user:", error);
    return NextResponse.json(
      { message: "An error occurred while processing the invitation." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const inviteId = searchParams.get("inviteId");

    if (!inviteId) {
      return NextResponse.json(
        { message: "Invite Id required." },
        { status: 400 }
      );
    }

    const { success, user, error, status } = await getUserFromSession();
    if (!success || !user) {
      return NextResponse.json({ error }, { status });
    }

    const deletionRequest = await prisma.invitation.delete({
      where: {
        id: Number(inviteId), 
      },
    });

    if (deletionRequest) {
      return NextResponse.json(
        { message: "Invitation is deleted." },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "No such invitation found." },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error deleting invitation:", error);
    return NextResponse.json(
      { message: "An error occurred while processing the deletion." },
      { status: 500 }
    );
  }
}
