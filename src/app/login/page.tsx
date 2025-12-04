import Login from "../ui/Login";

export default function LoginPage() {
    return (
        <main className="max-w-[520px] mx-auto mt-12 p-5 h-screen flex flex-col items-center">
            <h1 className="text-2xl font-semibold mb-3 text-[var(--brand-color-black)] text-center">Log in to your account</h1>
            <Login />
        </main>
    );
}