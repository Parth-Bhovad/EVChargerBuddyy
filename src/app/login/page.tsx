import Login from "../ui/Login";

export default function LoginPage() {
    return (
        <main className="max-w-[520px] mx-auto mt-12 p-5 h-screen">
            <h1 className="text-2xl font-semibold mb-3">Log in to your account</h1>
            <Login />
        </main>
    );
}