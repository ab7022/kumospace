import getUserFromSession from "@/lib/userSession";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function GET( _req:NextRequest,_res:NextResponse) {
  const { success, user, error, status } = await getUserFromSession();
  if (!success || !user) {
    return NextResponse.json({ error }, { status });
  }
  const userId = user.id;
  try {
    const userDetails = await prisma.user.findUnique({

      where: {
        id: userId,
      },
      include: {
        spaceMembers: true,
        teams: true,
        teamMembers: true,
      },
    });
    if (!userDetails) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
      return NextResponse.json(userDetails, { status: 200 });
    } catch (error) {
      console.error(error);
    }
  }