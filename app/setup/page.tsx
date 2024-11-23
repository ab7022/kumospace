import React, { useState } from "react";
import Header from "@/components/LandingPage/Header";
import { getUser } from "@/components/Sessions";
import SetupForm from "@/components/setup/SetupForm";

export default async function Setup() {
  const session = await getUser();

  return (
    <div className="bg-primary-200 min-h-screen flex flex-col items-center ">
      <Header session={session} />
      <SetupForm />
    </div>
  );
}
