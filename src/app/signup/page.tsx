import Signup from "../ui/Signup";

export default function SignupPage() {

  return (
    <main className="max-w-[520px] mx-auto p-5 h-screen flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-3 text-[var(--brand-color-black)] text-center">Create an account</h1>
        <Signup />
    </main>
  );
}
