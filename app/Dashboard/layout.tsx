import React, { useState } from "react";
import { cn } from "@/lib/utils";
import SidebarParent from "@/components/Sidebar";
import { getUser } from "@/components/Sessions";

export default async function workspace({ children }: any) {
  const session = await getUser();
  return (
    <div
      className={cn(
        " flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <SidebarParent session={session} />
      {children}
    </div>
  );
}
