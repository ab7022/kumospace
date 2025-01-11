import Header from "@/components/LandingPage/Header";
import { getUser } from "@/components/Sessions";
import Link from "next/link";
export default async function NotFound() {
  const session = await getUser();
  return (
    <div className="bg-neutral-900">
      {" "}
      
      <Header session={session} />
      <div className="flex flex-col h-screen  items-center justify-center   text-gray-100">
        <h1 className="text-5xl font-extrabold mb-4 text-red-500">404</h1>
        <p className="text-2xl mb-4">Page Not Found</p>
        <p className="text-center max-w-md mb-8">
          Sorry, the page you are looking for does not exist. It might have been
          removed or renamed.
        </p>
        <Link
          href="/"
          className="px-6 py-2 bg-primary-500 text-gray-900  rounded-md hover:bg-primary-600-700 transition duration-300"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
