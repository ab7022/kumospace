"use client";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PendingInvites from "@/components/dashboard/PendingInvites";
import QuickActions from "@/components/dashboard/QuickActions";
import TeamMembers from "@/components/dashboard/TeamMembers";
// import UpcomingDeadline from "@/components/dashboard/UpcomingDeadline";
// import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Dashboard()  {
  const router = useRouter();
  const [, setUserDetails] = useState(null);
  const [role, setRole] = useState("");
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("/api/dashboard/fetchData");
        setUserDetails(response.data);
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
  return (
    <div className="flex flex-1 overflow-x-scroll  bg-gradient-to-br from-neutral-900 to-neutral-800 p-4 md:p-8">
      <div className="max-w-8xl mx-auto">
        <DashboardHeader userRole={role} />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          {/* Left Column */}
          <div className="col-span-12 md:col-span-8 space-y-4 md:space-y-6">
            <TeamMembers />
            {/* <UpcomingEvents /> */}
          </div>
          {/* Right Column */}
          <div className="col-span-12 md:col-span-4 space-y-4 md:space-y-6">
            {(role === "ADMIN" || role === "MODERATOR") && <PendingInvites />}
            <QuickActions />
            {/* <UpcomingDeadline /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

