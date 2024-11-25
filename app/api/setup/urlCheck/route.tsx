import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
      const body = await req.json();
      if (!body) {
        return;
      }
      const url = body.url;
      
      const user = await client.space.findFirst({
        where: {
          url,
        },
      });
      if (!user) {
        return new NextResponse(JSON.stringify({ message:"Username is Available" }), {
          status: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
      } else {
        return new NextResponse(
          JSON.stringify({ message: "Username is Taken" }),
          {
            status: 201,
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      return new NextResponse(null, {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  }
  
  
  