import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
export async function getUser() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  return session;
}