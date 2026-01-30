import Login from "../ui/Login";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-[var(--brand-color-black)]">Welcome back</h1>
                        <p className="mt-2 text-gray-600">Log in to access your charging network</p>
                    </div>

                    <Login />

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Don&apos;t have an account?{" "}
                            <Link href="/signup" className="font-semibold text-[var(--brand-color-black)] hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>

                <p className="mt-8 text-center text-sm text-gray-500">
                    By logging in, you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </main>
    );
}