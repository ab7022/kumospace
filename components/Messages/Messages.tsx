"use client";
import { format } from "date-fns";

import React, { useState, useEffect, useRef } from "react";
import io, { Socket } from "socket.io-client";
import Image from "next/image";
import axios from "axios";
import {
  PaperAirplaneIcon,
  ServerStackIcon,
  PhoneIcon,
  VideoCameraIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { Search, Send } from "lucide-react";

const socket = io("http://localhost:3001");

interface Message {
  senderEmail: string;
  text: string;
  timeStamps: any;
  image: string;
  name: string;
  recipientEmail: string;
}

interface User {
  id: string;
  name: string;
  profileUrl: string;
  status: string;
  firstName?: string;
  email: string;
  lastName?: string;
}

const Messages = ({ session }: any) => {
  const [teamMembers, setTeamMembers] = useState<User[]>([]);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [chatMember, setChatMember] = useState<User | null>(null);
  const [message, setMessage] = useState("");
  const [currentUserId, setCurrentUserId] = useState("1");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileUrl, setProfileUrl] = useState("");

  console.log(message);
  useEffect(() => {
    setName(session.user.name);
    console.log(name);
    setEmail(session.user.email);
    setProfileUrl(session.user.image);
    setChatMember(teamMembers[0]);
  }, [teamMembers]);
  const socketUrl = "http://localhost:3001";
  useEffect(() => {
    // Establish socket connection when the component mounts
    const socketInstance = io(socketUrl);
    setSocket(socketInstance);
    // Emit the "registerForMessage" event to register the user
    socketInstance.emit("registerForMessage", { email: session.user.email,
    name: session.user.name,
    image: session.user.image
     });

    // Listen for previous messages from the server
    socketInstance.on("previousMessages", (data) => {
    console.log("previous Messages")
      console.log("previous Messages",data);
      setChatMessages(data);
    });

    // Listen for incoming messages
    socketInstance.on("receiveMessage", (incomingMessage) => {
      console.log("incoming Message",incomingMessage);
      setChatMessages((prevMessages) => [...prevMessages, incomingMessage]);
    });

    // Cleanup socket connection when component unmounts
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (socket && message) {
      const messageObject = {
        email : chatMember?.email, // Send the message to the recipient email
        text: message,
      };

      // Emit the message to the server
      socket.emit("sendMessage", messageObject);
      console.log("Message sent:", messageObject);

      // Clear the message input
      setMessage("");
    }
  };

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get("/api/dashboard/spaceMembers");
        const data = response.data.mySpaceMembers.map((item: any) => item.user);

        // Filter out the current user by name
        const filteredData = data.filter((item: any) => item.name !== name);

        console.log(filteredData); // Log to verify the filtered result
        setTeamMembers(filteredData);

      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, [name]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-row h-screen w-screen antialiased text-gray-800">
        <div className="flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
          <div className="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center">
                <div className="text-xl font-semibold">Messages</div>
                <div className="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium">
                  5
                </div>
              </div>
              <div className="ml-auto">
                <button className="flex items-center justify-center h-7 w-7 bg-gray-200 text-gray-500 rounded-full">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="mt-5">
              <ul className="flex flex-row items-center justify-center">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center pb-3 text-xs font-semibold relative text-indigo-800"
                  >
                    <span>All Conversations</span>
                    <span className="absolute left-0 bottom-0 h-1 w-24 bg-indigo-800 rounded-full"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <div className="text-xs text-gray-400 font-semibold uppercase">
                Team
              </div>
            </div>
            <div className="mt-2">
              <div className="flex flex-col -mx-4">
                <div className="flex flex-row items-center p-4 bg-gradient-to-r from-red-100 to-transparent border-l-2 border-red-500">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                    T
                  </div>
                  <div className="flex flex-col flex-grow ml-3">
                    <div className="flex items-center">
                      <div className="text-sm font-medium">My Space</div>
                      <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                    </div>
                    <div className="text-xs truncate w-40">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, doloribus?
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="text-xs text-gray-400 font-semibold uppercase">
                Personal
              </div>
            </div>
            <div className="h-full overflow-hidden relative pt-2">
              <div className="flex flex-col divide-y h-full overflow-y-auto -mx-4"
              >
                {teamMembers?.length > 0 &&
                  teamMembers?.map((member,index) => (
                    <div className="flex flex-row items-center p-4 hover:bg-slate-200 hover:rounded-2xl hover:shadow-sm transition-all duration-200 cursor-pointer"
                      key={member.id || index} // Add the key prop here
                      onClick={() => {
                        setChatMember(member);
                      }}
                    >
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                        <Image
                          src={
                            member.profileUrl ||
                            `https://ui-avatars.com/api/?name=${member.name}&background=ec4899&color=fff`
                          }
                          alt={member.name}
                          width={52}
                          height={52}
                          className="z-50 rounded-full ring-2 ring-indigo-500/50"
                        />
                      </div>
                      <div className="flex flex-col flex-grow ml-3">
                        <div className="flex items-center">
                          <div className="text-sm font-medium">
                            {(member?.firstName?.length ?? 0) > 0 ||
                            (member?.lastName?.length ?? 0) > 0 ? (
                              <>
                                {member.firstName} {member.lastName}
                              </>
                            ) : (
                              <> {member.name}</>
                            )}
                          </div>
                          <div
                            className={`h-2 w-2 rounded-full ${
                              member.status === "AVAILABLE"
                                ? "bg-green-400"
                                : member.status === "BUSY" ||
                                  member.status === "DND"
                                ? "bg-yellow-400"
                                : "bg-neutral-400"
                            } ml-2`}
                          ></div>
                        </div>
                        <div className="text-xs truncate w-40">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Debitis, doloribus?
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="absolute bottom-0 right-0 mr-2">
                <button className="flex items-center justify-center shadow-sm h-10 w-10 bg-red-500 text-white rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full w-full bg-white px-4 py-6">
          <div className="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
              <Image
                src={
                  chatMember?.profileUrl ||
                  `https://ui-avatars.com/api/?name=${chatMember?.name}&background=ec4899&color=fff`
                }
                alt={chatMember?.name || "Profile Photo"}
                width={52}
                height={52}
                className="z-50 rounded-full ring-2 ring-indigo-500/50"
              />
            </div>
            <div className="flex flex-col ml-3">
              <div className="font-semibold text-md">{chatMember?.name}</div>
              <div className="text-xs text-gray-500">{chatMember?.status}</div>
            </div>
            <div className="ml-auto">
              <ul className="flex flex-row items-center space-x-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full"
                  >
                    <PhoneIcon className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full"
                  >
                    <VideoCameraIcon className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full"
                  >
                    <EllipsisVerticalIcon className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-full overflow-hidden py-4">
            <div className="h-full overflow-y-auto">
              <div className="grid grid-cols-12 gap-y-2">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.senderEmail}
                    className={`${
                      msg.senderEmail === email
                        ? "col-start-6 col-end-13"
                        : "col-start-1 col-end-8"
                    } p-3 rounded-lg`}
                  >
                    <div
                      className={`flex ${
                        msg.senderEmail === email
                          ? "flex-row-reverse"
                          : "flex-row"
                      } items-center`}
                    >
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        <Image
                          src={
                           msg.image ||
                            `https://ui-avatars.com/api/?name=${msg.name}`
                          }
                          alt={msg.senderEmail}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                      <div
                        className={`relative ${
                          msg.senderEmail === email ? "mr-3" : "ml-3"
                        } text-sm ${
                          msg.senderEmail === email
                            ? "bg-indigo-100"
                            : "bg-white"
                        } py-2 px-4 shadow rounded-xl`}
                      >
                        <div>{msg.text}</div>
                        <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                        {msg.timeStamps && format(new Date(msg.timeStamps), "hh:mm a")}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center w-full border rounded-3xl h-12 px-2">
              <div className="w-full">
                <input
                  type="text"
                  className="border border-transparent w-full focus:outline-none text-sm h-10 flex items-center"
                  placeholder="Type your message...."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="flex flex-row"></div>
            </div>
            <div className="ml-6">
              <button
                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 text-indigo-800"
                onClick={sendMessage}
              >
                <PaperAirplaneIcon className="w-5 h-5 transform rotate-90 -mr-px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
