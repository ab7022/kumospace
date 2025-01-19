import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Filter, SlidersHorizontal, MessageCircle, MoreVertical, Users, Search } from "lucide-react";
import Link from "next/link";

interface TeamMember {
  id: number;
  name: string;
  status: string;
  profileUrl: string;
  designation: string;
  lastName: string;
  firstName: string;
  teamName: string;
}

const TeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTeam, setActiveTeam] = useState("All Teams");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSorted, setIsSorted] = useState(false); // State for sorting

  const teams = [
    { name: "All Teams", count: teamMembers.length },
    { name: "Design", count: 12 },
    { name: "Development", count: 8 },
    { name: "Marketing", count: 5 },
    { name: "Management", count: 3 },
  ];

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "AVAILABLE":
        return "bg-emerald-500";
      case "BUSY":
      case "DND":
        return "bg-amber-500";
      default:
        return "bg-neutral-400";
    }
  };

  const handleSort = () => {
    setIsSorted(!isSorted); // Toggle sort state
    setTeamMembers((prevMembers) =>
      [...prevMembers].sort((a, b) => {
        if (!isSorted) {
          return a.name.localeCompare(b.name); // Sort alphabetically
        }
        return 0;
      })
    );
  };

  return (
    <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl border border-neutral-700/50">
      <div className="p-6 border-b border-neutral-700/50">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" />
            <h2 className="text-2xl font-semibold text-white">Team Members</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleSort} // Attach sort handler
              className="flex items-center gap-2 text-neutral-400 hover:text-white px-4 py-2 rounded-lg hover:bg-neutral-700/50 transition-all duration-200"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>{isSorted ? "Unsort" : "Sort"}</span> {/* Change button text */}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {teams.map((team) => (
            <button
              key={team.name}
              onClick={() => setActiveTeam(team.name)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 ${
                activeTeam === team.name
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/20"
                  : "bg-neutral-700/20 text-neutral-300 hover:bg-neutral-700/40 border border-transparent"
              }`}
            >
              {team.name}
              <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-700/50">
                {team.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {isLoading ? (
          <div className="space-y-4">
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-5 bg-neutral-700/20 rounded-xl animate-pulse"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-600/50 rounded-full" />
                  <div>
                    <div className="w-32 h-4 bg-neutral-600/50 rounded" />
                    <div className="w-24 h-3 bg-neutral-600/50 rounded mt-2" />
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-5 bg-neutral-600/50 rounded-full" />
                  <div className="w-5 h-5 bg-neutral-600/50 rounded-full" />
                  <div className="w-5 h-5 bg-neutral-600/50 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {teamMembers.length > 0 &&
              teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="group flex items-center justify-between p-4 bg-neutral-700/20 hover:bg-neutral-700/30 rounded-xl transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Image
                        src={
                          member.profileUrl ||
                          `https://ui-avatars.com/api/?name=${member.name}&background=ec4899&color=fff`
                        }
                        alt={member.name}
                        width={48}
                        height={48}
                        className="rounded-full ring-2 ring-neutral-700/50 group-hover:ring-blue-500/50 transition-all duration-200"
                      />
                      <div
                        className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-neutral-800 ${getStatusColor(
                          member.status
                        )}`}
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-lg">
                        {member.firstName?.length > 0 || member.lastName?.length > 0
                          ? `${member.firstName} ${member.lastName}`
                          : member.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-neutral-400 text-sm">
                          {member.designation}
                        </span>
                        {member.teamName?.length > 0 && (
                          <>
                            <span className="w-1 h-1 bg-neutral-500 rounded-full" />
                            <span className="text-neutral-400 text-sm">
                              {member.teamName}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        getStatusColor(member.status)
                      } bg-opacity-20 text-white`}
                    >
                      {member.status}
                    </span>
                    <Link href={"/Dashboard/Messages"} className="p-2 hover:bg-neutral-600/50 rounded-lg transition-all">
                      <MessageCircle className="w-5 h-5 text-neutral-400 hover:text-white transition-colors" />
                    </Link>
                    <button className="p-2 hover:bg-neutral-600/50 rounded-lg transition-all">
                      <MoreVertical className="w-5 h-5 text-neutral-400 hover:text-white transition-colors" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMembers;
