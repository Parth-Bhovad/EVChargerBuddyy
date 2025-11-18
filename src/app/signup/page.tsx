import Signup from "../ui/Signup";

export default function SignupPage() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [submitting, setSubmitting] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setMessage("");

//     // Demo handler — replace with real API call when ready
//     console.log({ username, email, password });
//     await new Promise((res) => setTimeout(res, 500));

//     // Persist basic profile info for the demo/profile page
//     try {
//       if (typeof window !== "undefined") {
//         localStorage.setItem(
//           "evcb_profile",
//           JSON.stringify({ username: username || "", email: email || "" })
//         );
//       }
//     } catch (err) {
//       console.warn("Could not persist profile to localStorage", err);
//     }

//     setSubmitting(false);
//     setMessage("Signup data saved (demo). You can view your profile.");
//     setUsername("");
//     setEmail("");
//     setPassword("");
//   };

  return (
    <main className="max-w-[520px] mx-auto mt-12 p-5 h-screen">
      <h1 className="text-2xl font-semibold mb-3">Create an account</h1>
        <Signup />

      {/* <form onSubmit={handleSubmit} className="grid gap-3">
        <label className="block">
          <div className="mb-1.5 text-sm">Username</div>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Your username"
            className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </label>

        <label className="block">
          <div className="mb-1.5 text-sm">Email</div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </label>

        <label className="block">
          <div className="mb-1.5 text-sm">Password</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            placeholder="Choose a password"
            className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </label>

        <div>
          <button
            type="submit"
            disabled={submitting}
            className="py-2.5 px-3.5 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            {submitting ? "Creating..." : "Create account"}
          </button>
        </div>
      </form> */}

      {/* {message && <p className="mt-3 text-green-700">{message}</p>} */}
    </main>
  );
}
