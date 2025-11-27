"use server";
import { connectDB } from "./mongoose";
import { User } from "../model/User";
import { auth } from "../lib/auth";
import { headers } from "next/dist/server/request/headers";
// import { redirect } from "next/dist/server/api-utils";

export async function CreateUser(formData: FormData) {
    await connectDB();

    await User.create({
        username: formData.get("username") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    });
}

export async function SignupUser(formData: FormData) {
    const name = formData.get("username") as string;
    const password = formData.get("password") as string;
    const email = formData.get("email") as string;

    await auth.api.signUpEmail({
        body: {
            name, // required
            email, // required
            password, // required
            callbackURL: "http://localhost:3000/",
        },
    });

    // redirect();
}

export async function LoginUser(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await auth.api.signInEmail({
        body: {
            email, // required
            password, // required
            rememberMe: true,
            callbackURL: "http://localhost:3000/",
        },
        // This endpoint requires session cookies.
        headers: await headers(),
    });

}

export async function LogoutUser() {
    await auth.api.signOut({
        // This endpoint requires session cookies.
        headers: await headers(),
    });
}