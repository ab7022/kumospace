import { getServerSession } from "next-auth";
import prisma from "../lib/prisma"; 
import { NEXT_AUTH_CONFIG } from "./auth";

export default async function getUserFromSession () {
  const session = await getServerSession(NEXT_AUTH_CONFIG);

  if (!session) {
    return { success: false, error: "Unauthorized", status: 401 };
  }

  const email = session.user?.email;

  if (!email) {
    return { success: false, error: "Email not found in session", status: 400 };
  }

  const user = await prisma.user.findUnique({
    where: { email: email as string },
  });

  if (!user) {
    return { success: false, error: "User not found", status: 400 };
  }

  return { success: true, user };
};
