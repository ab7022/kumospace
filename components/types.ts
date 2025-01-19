interface Position {
    x: number;
    y: number;
  }
  
  interface User {
    timezone?: string;
    teamName?: string;
    designation?: string;
    id: string;
    image: string;
    name: string;
    position: Position;
    email: string;
    status: string;
    lastActive: number;
    onCurrentlyWorking?: string;
  }
  
  interface AvatarProps {
    position: Position;
    name: string;
    isCurrentUser?: boolean;
    image: string;
    email?: string;
    status?: string;
    onCurrentlyWorking?: string;
    designation?: string;
    teamName?: string;
    timezone?: string;
    screenStream?: MediaStream | null;
    remoteStream?: MediaStream | null;
    myStream?: MediaStream | null;
  }
  type UserDetails = {
    id: string;
    name: string;
    email: string;
    image: string;
    onCurrentlyWorking: string;
    designation: string;
    teamName: string;
    timezone: string;
    status: string;
  };

interface TeamMember {
  id: number;
  name: string;
  status: string;
  profileUrl: string;
  designation: string;
  lastName: string;
  email: string;
  firstName: string;
  teamName: string;
}
  export type { Position, User, AvatarProps, UserDetails,TeamMember };