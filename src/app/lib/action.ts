"use server";
import { connectDB } from "./mongoose";
import { User } from "../model/User";

export async function CreateUser(formData: FormData) {
    await connectDB();

    await User.create({
        username: formData.get("username") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    });
}
