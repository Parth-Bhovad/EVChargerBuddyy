import { User } from "../model/User";

async function Profile() {

  const user = await User.find({username: "user1"});
  return ( 
    <main className="h-screen">
      <h1>User Profile</h1>
      <section>
        <div>
          Username: {user[0].username}
        </div>
      </section>
    </main>
   );
}

export default Profile;