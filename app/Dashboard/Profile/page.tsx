import React from "react";
import {
  ArrowRightIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import BasicDetails from "@/components/profile/BasicDetails";
import DailyStatus from "@/components/profile/DailyStatus";
import ActiveTask from "@/components/profile/ActiveTask";
import ProjectAssign from "@/components/profile/ProjectAssign";
import Reminders from "@/components/profile/Reminders";
import TeamDirectory from "@/components/profile/TeamDirectory";
import Setting from "@/components/profile/Setting";

const page = () => {
  return (
    <div className="flex flex-col w-full flex-1  overflow-x-scroll bg-gradient-to-br from-neutral-900 to-neutral-800">
      <BasicDetails />
      <DailyStatus />
      {/* <ActiveTask /> */}
      {/* <ProjectAssign /> */}
       <Reminders /> 
       <TeamDirectory /> 
      <Setting  />
    </div>
  );
};

export default page;
