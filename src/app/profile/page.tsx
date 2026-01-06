import Profile from "../ui/Profile";
import { getSessionUser } from "../lib/session";
import { redirect } from 'next/navigation'

async function ProfilePage() {
  const user = await getSessionUser();

  if(!user){
    redirect('/login');
  }

  return (
    <main className="max-w-[520px] mx-auto mt-12 p-5 h-screen flex flex-col items-center relative">
      <Profile name={user.name} />
    </main>
  );
}

export default ProfilePage;