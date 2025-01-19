"use client";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PendingInvites from "@/components/dashboard/PendingInvites";
import QuickActions from "@/components/dashboard/QuickActions";
import TeamMembers from "@/components/dashboard/TeamMembers";
// import UpcomingDeadline from "@/components/dashboard/UpcomingDeadline";
 import TeamTasksDashboard from "@/components/dashboard/TeamTasksDashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { TeamMember } from "@/components/types";

export default function Dashboard()  {
  const router = useRouter();
  const [role, setRole] = useState("");
  const [teamMembers,setTeamMembers] = useState<TeamMember[]>([])
  const [isloading,setIsLoading] = useState(false)
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("/api/dashboard/fetchData");
        setRole(response.data.spaceMembers[0].role);
      } catch (error) {
        console.error("Error fetching user details:", error);
        alert("An error occurred while fetching user details.");
      }
    };
    fetchUserDetails();
  }, []);
  async function getData() {
    try {
      const response = await axios.get("/api/dashboard/isLoggedIn");
      if (response.status === 200) {
      } else {
        router.push("/setup");
      }
    } catch (error: any) {
      console.error("Error:", error.message);
      router.push("/setup");
    }
  }
  useEffect(() => {
    getData();
  }, [getData]);
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get("/api/dashboard/spaceMembers");
        const data = response.data.mySpaceMembers.map((item: any) => item.user);
        setTeamMembers(data);
      } catch {
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);
  return (
    <div className="flex flex-1 overflow-x-scroll  bg-gradient-to-br from-neutral-900 to-neutral-800 p-4 md:p-8">
      <div className="max-w-8xl mx-auto">
        <DashboardHeader userRole={role} />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          {/* Left Column */}
          <div className="col-span-12 md:col-span-8 space-y-4 md:space-y-6">
            <TeamMembers isLoading={isloading} teamMembers={teamMembers} setTeamMembers={setTeamMembers}/>
            <TeamTasksDashboard />
          </div>
          {/* Right Column */}
          <div className="col-span-12 md:col-span-4 space-y-4 md:space-y-6">
            {(role === "ADMIN" || role === "MODERATOR") && <PendingInvites />}
            <QuickActions teamMembers={teamMembers}/>
            {/* <UpcomingDeadline /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

