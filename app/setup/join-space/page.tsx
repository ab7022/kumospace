import React from "react";
import Header from "@/components/LandingPage/Header";
import { getUser } from "@/components/Sessions";
import JoinSpace from "@/components/setup/JoinSpace";
export default async function JoinSpaceForm() {
  const session = await getUser();

  return (
    < div className="bg-gradient-to-br from-[#0D0D0D] to-[#1E1E1E] min-h-screen flex flex-col items-center py-10 relative overflow-hidden">
      {" "}
      <Header session={session} />
      <JoinSpace />
    </div>
  );
}
