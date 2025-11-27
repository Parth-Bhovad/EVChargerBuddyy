import Profile from "../ui/Profile";
import { auth } from "@/app/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";

async function ProfilePage() {
  const session = await auth.api.getSession({
      headers: await headers() // you need to pass the headers object.
  })

  return (
    <main className="h-screen">
      <h1>User Profile</h1>
      <Profile name={session?.user?.name} />
    </main>
  );
}

export default ProfilePage;