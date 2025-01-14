
import { getUser } from "@/components/Sessions";
import Canvas from "@/components/workspace/Canvas";


const Workspace = () => {
  const open = false;
  const session = getUser();

  return <Canvas open={open} session={session} />;
};

export default Workspace;
