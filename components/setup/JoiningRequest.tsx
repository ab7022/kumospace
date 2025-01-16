"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const JoiningRequest = () => {
  interface JoinRequest {
    id: string;
    role: string;
    spaceName: string;
  }

  const [joinRequests, setJoinRequests] = useState<JoinRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [spaceName, setSpaceName] = useState("");
  const router = useRouter();
  const url = "/api/setup/checkExistingInvites";

  useEffect(() => {
    const fetchJoinRequests = async () => {
      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          const { invites, name } = response.data;
          setSpaceName(name);
          setJoinRequests(invites);
        } else {
          console.error("Failed to fetch join requests.");
        }
      } catch (error) {
        console.error("Error fetching join requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJoinRequests();
  }, []); // Run only once on mount

  async function acceptInvitation(invitationId: string) {
    try {
      const res = await axios.post(url, { requestId: invitationId });
      if (res.status === 200) {
        setJoinRequests((prevRequests) =>
          prevRequests.filter((request) => request.id !== invitationId)
        );
        router.push(`/Dashboard`);
      }
    } catch (error) {
      console.error("Error accepting invitation:", error);
    }
  }

  async function declineInvitation(invitationId: string) {
    try {
      const res = await axios.put(url, { requestId: invitationId });
      if (res.status === 200) {
        setJoinRequests((prevRequests) =>
          prevRequests.filter((request) => request.id !== invitationId)
        );
      }
    } catch (error) {
      console.error("Error declining invitation:", error);
    }
  }

  return (
    <div>
      <div className="mb-8">
        {loading ? (
          <p className="text-center text-[#E0E0E0]">
            Loading your join requests...
          </p>
        ) : joinRequests.length > 0 ? (
          <div className="p-4 border rounded-lg bg-[#2A2A2A]">
            <h2 className="text-xl text-[#FFEA00] font-semibold mb-4">
              Pending Join Requests
            </h2>
            <ul className="space-y-4">
              {joinRequests.map((request) => (
                <li
                  key={request.id}
                  className="p-4 bg-[#1E1E1E] rounded-lg shadow list-none"
                >
                  <p className="text-[#E0E0E0]">
                    <strong>Space Name:</strong> {spaceName}
                  </p>
                  <p className="text-[#E0E0E0]">
                    <strong>Role:</strong> {request.role}
                  </p>
                  <div className="flex flex-row gap-x-5">
                    <button
                      className="mt-4 w-full py-2 px-4 bg-neutral-700 hover:bg-neutral-800 text-neutral-200 font-semibold rounded-md hover:text-neutral-100 transition-colors"
                      onClick={() => declineInvitation(request.id)}
                    >
                      Decline
                    </button>
                    <button
                      className="mt-4 w-full py-2 px-4 bg-[#FFEA00] text-black font-semibold rounded-md hover:bg-yellow-400 transition-colors"
                      onClick={() => acceptInvitation(request.id)}
                    >
                      Accept
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-center text-[#E0E0E0]">
            No pending join requests.
          </p>
        )}
      </div>
    </div>
  );
};

export default JoiningRequest;
