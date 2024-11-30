import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
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

const TeamMembers = ({ userRole }: { userRole: string }) => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get("/api/dashboard/spaceMembers");
        console.log(response.data.mySpaceMembers);
        const data = response.data.mySpaceMembers.map((item: any) => item.user);
        setTeamMembers(data);
      } catch (error) {
        console.error("Failed to fetch team members", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-700/50">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-white">Team Members</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 text-neutral-400 hover:text-white px-4 py-2 rounded-lg hover:bg-neutral-700/50 transition-all duration-200">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filter
          </button>
          <button className="flex items-center gap-2 text-neutral-400 hover:text-white px-4 py-2 rounded-lg hover:bg-neutral-700/50 transition-all duration-200">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
              />
            </svg>
            Sort
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        <button className="px-4 py-2 bg-neutral-700 text-white rounded-lg">
          All Teams
        </button>
        <button className="px-4 py-2 bg-neutral-700/40 hover:bg-neutral-700 text-white rounded-lg">
          Design
        </button>
        <button className="px-4 py-2 bg-neutral-700/30  text-neutral-700 dark:text-neutral-200 rounded-lg  hover:bg-neutral-700">
          Development
        </button>
        <button className="px-4 py-2 bg-neutral-700/20  text-neutral-700 dark:text-neutral-200 rounded-lg  dark:hover:bg-neutral-700">
          Marketing
        </button>
        <button className="px-4 py-2 bg-neutral-700/10  text-neutral-700 dark:text-neutral-200 rounded-lg  dark:hover:bg-neutral-700">
          Management
        </button>
      </div>
      {isLoading ? (
        <p className="text-white text-center">Loading...</p>
      ) : (
        <div className="space-y-4">
          {teamMembers.length > 0 &&
            teamMembers?.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-5 bg-neutral-700/20 hover:bg-neutral-700/30 rounded-xl transition-all duration-200"
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
                      className=" z-50 rounded-full ring-2 ring-indigo-500/50"
                    />
                    <div
                      className={`absolute -bottom-1 z-40 -right-1 w-4 h-4 rounded-full border-2 border-neutral-800 ${
                        member.status === "AVAILABLE"
                          ? "bg-green-400"
                          : member.status === "BUSY" || member.status === "DND"
                          ? "bg-yellow-400"
                          : "bg-neutral-400"
                      }`}
                    ></div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg">
                      {member.firstName?.length > 0 ||
                      member.lastName?.length > 0 ? (
                        <>
                          {member.firstName} {member.lastName}
                        </>
                      ) : (
                        <> {member.name}</>
                      )}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-neutral-400 text-sm">
                        {member.designation}
                      </span>
                      {member.teamName?.length >0 &&(
                          <>
                            {" "}
                            <span className="w-1 h-1 bg-neutral-500 rounded-full"></span>
                            <span className="text-neutral-400 text-sm">
                              {member.teamName}
                            </span>
                          </>
                        )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      member.status === "AVAILABLE"
                        ? "bg-green-400"
                        : member.status === "BUSY" || member.status === "DND"
                        ? "bg-yellow-400"
                        : "bg-neutral-400"
                    }`}
                  >
                    {member.status}
                  </span>
                  <button className="p-2 hover:bg-neutral-700 rounded-lg transition-all">
                    <svg
                      className="w-5 h-5 text-neutral-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </button>
                  <button className="text-neutral-400 hover:text-red-400 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default TeamMembers;
