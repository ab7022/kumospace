import workspace from "@/public/images/updated.jpg";
import Image from "next/image";
import { useState } from "react";

const Workspace = ({ open }: { open: boolean }) => {
  return (
    <div
      className={`flex ${
        open ? "flex-row" : "flex-col"
      } h-screen w-full overflow-x-auto bg-gradient-to-br from-neutral-900 to-neutral-800`}
    >
      {/* Main Content */}
      <div className="flex min-w-full ">
        <div className="flex h-full">
          <Image
            src={workspace}
            alt="workspace"
            className="w-full h-full max-w-screen"
          />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
