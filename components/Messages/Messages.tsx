"use client";
import React, { useState, useEffect, useRef } from "react";
import io, { Socket } from "socket.io-client";
import Image from "next/image";
import axios from "axios";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { MessageSquare, Workflow } from "lucide-react";

interface Message {
  senderEmail: string;
  text: string;
  timestamp: any;
  image: string;
  name: string;
  recipientEmail?: string;
  code?: string;
}

interface User {
  id: string;
  name: string;
  profileUrl?: string;
  status?: string;
  firstName?: string;
  email?: string;
  lastName?: string;
  code?: string;
}

const Messages = ({ session }: any) => {
  const [teamMembers, setTeamMembers] = useState<User[]>([]);
  const [chatMember, setChatMember] = useState<User | null>(null);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [allMessages, setAllMessages] = useState<Message[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<Message[]>([]);
  const [spaceDetails, setSpaceDetails] = useState<any>(null);
  const [code, setCode] = useState("");
  const [groupMessages, setGroupMessages] = useState<Message[]>([]);
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get("/api/dashboard/spaceMembers");
        const data = response.data.mySpaceMembers.map((item: any) => item.user);
        setSpaceDetails(response.data.spaceDetails);
        const filteredData = data.filter((item: any) => item.name !== name);
        setTeamMembers(filteredData);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, [name]);

  useEffect(() => {
    setName(session.user.name);
    setEmail(session.user.email);
    setProfileUrl(session.user.image);
    setChatMember(teamMembers[0]);
    setCode(spaceDetails?.code);
  }, [teamMembers, spaceDetails]);

  const socketUrl = "http://localhost:3001";
  useEffect(() => {
    const socketInstance = io(socketUrl);
    setSocket(socketInstance);
    setTimeout(() => {
      socketInstance.emit("registerForMessage", {
        email: session.user.email,
        name: session.user.name,
        image: session.user.image,
      });
    }, 2000);

    socketInstance.on("previousMessages", (data) => {
      setAllMessages(data);
    });

    socketInstance.on("receiveMessage", (incomingMessage) => {
      console.log("Incoming Message:", incomingMessage);
      setAllMessages((prevMessages) => [...prevMessages, incomingMessage]);
    });
 
    // Listen for group messages
    socketInstance.on("receive-group-message", (message) => {
      console.log("Group Message:", message);
      setGroupMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socketInstance.disconnect();
    };
  }, [
    session.user.email,
    session.user.name,
    session.user.image,
    spaceDetails?.code,
  ]);
  const checkSendMessage = () => {
    if (chatMember?.email) {
      sendMessage();
      
    } else {
      sendGroupMessage();
    }
  };

  useEffect(() => {
    if (chatMember && email) {
      const filtered = allMessages.filter(
        (msg) =>
          (msg.senderEmail === email &&
            msg.recipientEmail === chatMember.email) ||
          (msg.senderEmail === chatMember.email && msg.recipientEmail === email) 
      );
      setFilteredMessages(filtered);
      scrollToBottom();
    }
  }, [chatMember, allMessages, email, code]);
  const sendGroupMessage = () => {
    console.log("Group Message");
    if (socket && message) {
      const messageObject = {
         senderEmail:email,
         text:message,
         code:spaceDetails?.code,
         image:profileUrl,
         name:name,
      };
      console.log("Group Message Object:", messageObject);
      socket.emit("group-message", messageObject);
      setMessage("");
  };
}
  const sendMessage = () => {
    console.log("Message");
    if (socket && message) {
      const messageObject = {
        email: chatMember?.email,
        text: message,
      };
      socket.emit("sendMessage", messageObject);
      setMessage("");
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const formatRelativeTime = (isoString: any) => {
    const date = new Date(isoString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    if (diffInSeconds < 60) {
      return rtf.format(-diffInSeconds, "seconds");
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return rtf.format(-minutes, "minutes");
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return rtf.format(-hours, "hours");
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return rtf.format(-days, "days");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-full lg:w-80 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-indigo-600" />
              <h1 className="text-xl font-semibold text-gray-800">Messages</h1>
            </div>
          </div>
        </div>
        <div className="p-4">
          <details className="group">
            <summary className="text-xs flex flex-row justify-between font-semibold text-gray-500 uppercase tracking-wider cursor-pointer bg-gray-50 p-2 rounded-sm">
              <p className="text-indigo-500 underline">Team</p>
              <span className="ml-2 text-indigo-500 group-open:rotate-180 transition-transform">
                ▼
              </span>
            </summary>
            <div
              className="mt-2 space-y-2 "
              onClick={() => {
                setChatMember(spaceDetails);
                const user = {
                  email: email,
                  name: name,
                  image: profileUrl,
                  spaceCode: code,
                };
                socket?.emit("joinRoom", user);
              }}
            >
              <div className="p-3 bg-gradient-to-r from-indigo-50 to-transparent border-l-4 border-indigo-500 rounded-lg cursor-pointer transition-all hover:bg-gray-100">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-600 font-semibold">
                        {spaceDetails?.name[0].toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {spaceDetails?.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      General Discussion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
        <div className="p-4">
          <details className="group">
            <summary className="text-xs flex fle-row justify-between font-semibold text-gray-500 uppercase tracking-wider cursor-pointer bg-gray-50 p-2 rounded-sm">
              <p className="text-indigo-500 underline">Personal</p>
              <span className="ml-2 text-indigo-500 group-open:rotate-180 transition-transform">
                ▼
              </span>
            </summary>
            <div className="mt-2 space-y-1">
              {teamMembers?.map((member, index) => (
                <div key={index}>
                  <div
                    onClick={() => setChatMember(member)}
                    className={`p-3 w-full rounded-lg cursor-pointer transition-all hover:bg-gray-200 ${
                      chatMember?.id === member.id ? "bg-gray-100" : ""
                    } flex items-center justify-between`}
                  >
                    <div className="flex items-center">
                      <div className="relative flex-shrink-0">
                        <Image
                          src={
                            member.profileUrl ||
                            `https://ui-avatars.com/api/?name=${member.name}&background=6366f1&color=fff`
                          }
                          alt={member.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <span
                          className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white ${
                            member.status === "AVAILABLE"
                              ? "bg-green-400"
                              : member.status === "BUSY" ||
                                member.status === "DND"
                              ? "bg-yellow-400"
                              : "bg-gray-400"
                          }`}
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {member.firstName && member.lastName
                            ? `${member.firstName} ${member.lastName}`
                            : member.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">Online</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </details>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col ">
        {/* Chat Header */}
        {chatMember && (
          <div className="p-4 border-b border-gray-200 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative">
                  <Image
                    src={
                      chatMember?.profileUrl ||
                      `https://ui-avatars.com/api/?name=${chatMember.name[0]}&background=6366f1&color=fff`
                    }
                    alt={chatMember.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  {chatMember.status && (
                    <span
                      className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white ${
                        chatMember.status === "AVAILABLE"
                          ? "bg-green-400"
                          : chatMember.status === "BUSY" ||
                            chatMember.status === "DND"
                          ? "bg-yellow-400"
                          : "bg-gray-400"
                      }`}
                    />
                  )}
                </div>
                <div className="ml-3">
                  <h2 className="text-lg font-medium text-gray-900">
                    {chatMember.name}
                  </h2>
                  <p className="text-sm text-gray-500">{chatMember?.status}</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <button
                  className="p-2 text-gray-100 flex flex-row items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-full transition-colors"
                  onClick={() =>
                    (window.location.href = "/Dashboard/Workspace")
                  }
                >
                  <Workflow className="w-5 h-5" />
                  Go to Workspace
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
          <div className="space-y-4">
            {!chatMember?.code ? (
              filteredMessages.map((msg: any, index: any) => (
                <div
                  key={`${msg.senderEmail}-${index}`}
                  className={`flex ${
                    msg.senderEmail === email ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-end gap-2 max-w-[70%] ${
                      msg.senderEmail === email ? "flex-row-reverse" : ""
                    }`}
                  >
                    <Image
                      src={
                        msg.image ||
                        `https://ui-avatars.com/api/?name=${msg.name}`
                      }
                      alt={msg.senderEmail}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div
                      className={`relative px-4 py-2 rounded-lg text-sm shadow-sm ${
                        msg.senderEmail === email
                          ? "bg-indigo-600 text-white"
                          : "bg-white text-gray-900 border border-gray-200"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <span className="block text-xs mt-1 opacity-70">
                        {formatRelativeTime(msg.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              groupMessages.map((msg: any, index: any) => (
                <div
                  key={`${msg.senderEmail}-${index}`}
                  className={`flex ${
                    msg.senderEmail === email ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-end gap-2 max-w-[70%] ${
                      msg.senderEmail === email ? "flex-row-reverse" : ""
                    }`}
                  >
                    <Image
                      src={
                        msg.image ||
                        `https://ui-avatars.com/api/?name=${msg.name}`
                      }
                      alt={msg.senderEmail}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div
                      className={`relative px-4 py-2 rounded-lg text-sm shadow-sm ${
                        msg.senderEmail === email
                          ? "bg-indigo-600 text-white"
                          : "bg-white text-gray-900 border border-gray-200"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <span className="block text-xs mt-1 opacity-70">
                        {formatRelativeTime(msg.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    checkSendMessage();
                  }
                }}
                className="w-full px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={checkSendMessage}
              className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
            >
              <PaperAirplaneIcon className="w-5 h-5 transform " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
