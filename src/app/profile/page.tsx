import Profile from "../ui/Profile";
import { getSessionUser } from "../lib/session";
import { redirect } from 'next/navigation'

async function ProfilePage() {
  const user = await getSessionUser();

  if(!user){
    redirect('/login');
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8 md:py-12">
      <div className="max-w-lg mx-auto">
        <Profile name={user.name} />
      </div>
    </main>
  );
}

export default ProfilePage;