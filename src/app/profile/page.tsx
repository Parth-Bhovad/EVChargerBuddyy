import Profile from "../ui/Profile";
import { auth } from "@/app/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";

async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
  })

  return (
    <main className="max-w-[520px] mx-auto mt-12 p-5 h-screen flex flex-col items-center">
      <Profile name={session?.user?.name} />
    </main>
  );
}

export default ProfilePage;