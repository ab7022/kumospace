import React from 'react';
import { Video,PenLine, ChevronRight, MessageSquare, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const QuickActionButton = ({ icon: Icon, title, color, bgColor, hoverBgColor,href }:any) => (
  <Link className="w-full group flex items-center justify-between bg-neutral-700/20 text-left px-4 py-3 rounded-xl transition-all duration-300 hover:scale-102 hover:bg-neutral-800"href={href}>
    <div className="flex items-center gap-4" >
      <div className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${hoverBgColor}`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <span className="font-medium text-neutral-300 group-hover:text-white transition-colors">
        {title}
      </span>
    </div>
    <ChevronRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
  </Link>
);

const QuickActions = () => {
  const actions = [
    {
      icon: MessageSquare,
      title: "Quick Chat",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      hoverBgColor: "group-hover:bg-blue-400/20",
      href:"/Dashboard/Messages"
    },
    {
      icon: Video,
      title: "Start Video Call",
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
      hoverBgColor: "group-hover:bg-emerald-400/20",
      href:"/Dashboard"
    },
    {
      icon: Users,
      title: "Assign Task",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      hoverBgColor: "group-hover:bg-purple-400/20",
      href:"/Dashboard"
    },
    {
      icon: PenLine,
      title: "Write Update",
      color: "text-rose-400",
      bgColor: "bg-rose-400/10",
      hoverBgColor: "group-hover:bg-rose-400/20",
      href:"/Dashboard"
    }
  ];

  return (
    <Card className="bg-neutral-800/50 backdrop-blur-xl shadow-xl border-neutral-700/50  ">
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl font-semibold text-white tracking-tight">
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {actions.map((action, index) => (
            <QuickActionButton
              key={index}
              icon={action.icon}
              title={action.title}
              color={action.color}
              bgColor={action.bgColor}
              hoverBgColor={action.hoverBgColor}
              href={action.href}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;