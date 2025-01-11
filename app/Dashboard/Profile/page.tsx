import React from "react";
import BasicDetails from "@/components/profile/BasicDetails";
import DailyStatus from "@/components/profile/DailyStatus";
import ActiveTask from "@/components/profile/ActiveTask";
import ProjectAssign from "@/components/profile/ProjectAssign";
import Reminders from "@/components/profile/Reminders";
import Setting from "@/components/profile/Setting";

const page = () => {
  return (
    <div className="flex flex-col w-full flex-1  overflow-x-scroll bg-gradient-to-br from-neutral-900 to-neutral-800">
      <BasicDetails />
      <DailyStatus />
       <ActiveTask /> 
       <ProjectAssign /> 
       <Reminders /> 
      <Setting  />
    </div>
  );
};

export default page;
