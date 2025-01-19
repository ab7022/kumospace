"use client";
import React, { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { LogoIcon } from "@/components/Logo";
import Image from "next/image";
import {
  IconArrowLeft,
  IconMessage,
  IconUserBolt,
} from "@tabler/icons-react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/Sidevar";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { Laptop } from "lucide-react";

const SidebarParent = ({ session }: any) => {
  const links = [
    {
      label: "Workspace",
      href: "/Dashboard/Workspace",
      icon: (
        <BuildingOffice2Icon className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Dashboard",
      href: "/Dashboard",
      icon: (
        <Laptop className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/Dashboard/Profile",
      icon: (
        <IconUserBolt className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Messages",
      href: "/Dashboard/Messages",
      icon: (
        <IconMessage className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft
          className="text-neutral-200 h-5 w-5 flex-shrink-0"
          onClick={() => {
            signOut();
          }}
        />
      ),
    },
  ];


  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (path == "/Dashboard/Profile") {
      setOpen(true);
    }
  }, [path]);

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10 bg-gradient-to-b from-gray-950  to-gray-950 border-r border-gray-700/30">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 py-6">
          <div className="flex items-center justify-center mb-6">
            {open ? (
              <Logo  />
            ) : (
              <LogoIcon  />
            )}
          </div>
          
          <div className={`items-center justify-center mb-6 ${open? "" : "flex flex-col"
          }`} >
            {links.slice(0, -1).map((link, idx) => (
              <SidebarLink
                key={idx}
                link={link}
                className={`rounded-lg px-3 py-2.5 transition-all duration-200 ease-in-out hover:bg-gray-800/50 ${
                  path === link.href
                    ? "bg-gray-800/70 shadow-lg"
                    : "hover:translate-x-1"
                }`}
              />
            ))}
          </div>
        </div>

        <div className=" border-t border-gray-700/30">
          <SidebarLink
            link={{
              label: session?.user?.name || session?.user?.email || "User",
              href: "#",
              icon: (
                  <Image
                    src={session?.user?.image || "/default-avatar.png"}
                    className={` w-10 rounded-full ring-2 ring-gray-700/50 transition-all duration-200 hover:ring-blue-500/50 `}
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
              ),
            }}
            className={`rounded-lg ${open? "px-3 py-2.5" : ""}  hover:bg-gray-800/50 transition-all duration-200`}
          />

          <SidebarLink
            link={links[links.length - 1]}
            className={`mt-2 rounded-lg ${open? "px-3 py-2.5" : ""}  transition-all duration-200 text-red-400 bg-red-500/20 flex justify-center items-center hover:bg-red-500/40 hover:text-red-300 `}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
};

export default SidebarParent;