"use client";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PendingInvites from "@/components/dashboard/PendingInvites";
import QuickActions from "@/components/dashboard/QuickActions";
import SharedResources from "@/components/dashboard/SharedResources";
import TeamActivities from "@/components/dashboard/TeamActivities";
import TeamMembers from "@/components/dashboard/TeamMembers";
import UpcomingDeadline from "@/components/dashboard/UpcomingDeadline";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import TeamPerformance from "@/components/dashboard/TeamPerformance";

const Dashboard = ({ open }: { open: boolean }) => {
  return (
    <div className="flex flex-1  overflow-x-scroll bg-gradient-to-br from-neutral-900 to-neutral-800 p-8">
      <div className="max-w-8xl  mx-auto">
        <DashboardHeader />
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 space-y-6">
            <TeamMembers />
            <TeamActivities />
            <SharedResources />
            <UpcomingEvents />
          </div>
          <div className="col-span-4 space-y-6">
            <TeamPerformance />
            <PendingInvites open={open} />
            <QuickActions />
            <UpcomingDeadline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
