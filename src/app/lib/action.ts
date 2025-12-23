"use server";
import { connectDB } from "./mongoose";
import { auth } from "../lib/auth";
import { headers } from "next/dist/server/request/headers";
// import { redirect } from "next/dist/server/api-utils";\
import { ChargingStation } from "../model/ChargingStation";
import { redirect } from "next/navigation";
import { formState } from "@/app/Types";
import { UserSignUpSchema } from "@/app/lib/schemas";
import { UserLoginSchema } from "@/app/lib/schemas";
import { ChargingStationSchema } from "@/app/lib/schemas";

export async function SignupUser(prevState: formState, formData: FormData): Promise<formState> {

    const result = UserSignUpSchema.safeParse({
        name: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!result.success) {
        console.log(result.error);
        return {
            status: "failed",
            msg: "Invalid input"
        };
    }

    const { name, email, password } = result.data;

    try {
        await auth.api.signUpEmail({
            body: {
                name, // required
                email, // required
                password, // required
            },
        });
        return {
            status: "success",
            msg: "User Registered Successfully"
        };
    } catch (error) {
        console.error("Error during sign up:", error);
        return {
            status: "failed",
            msg: "Error during sign up"
        };
    }
}

export async function LoginUser(prevState: formState, formData: FormData): Promise<formState> {
    const result = UserLoginSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password")
    });
    if (!result.success) {
        return {
            status: "failed",
            msg: "Invalid input"
        };
    }
    const { email, password } = result.data;

    try {
        await auth.api.signInEmail({
            body: {
                email, // required
                password, // required
                rememberMe: true,
            },
            // This endpoint requires session cookies.
            headers: await headers(),
        });
        return {
            status: "success",
            msg: "User Logged In Successfully"
        };
    } catch (error) {
        console.error("Error during login:", error);
        return {
            status: "failed",
            msg: "Invalid email or password"
        };
    }
}

export async function LogoutUser() {
    try {
        await auth.api.signOut({
            headers: await headers(),
        });
        redirect("/");
    } catch (error) {
        console.error("Error during logout:", error);
        throw error;
    }
}

export async function CreateChargingStation(prevState: formState, formData: FormData): Promise<formState> {
    const result = ChargingStationSchema.safeParse({
        stationName: formData.get("stationName"),
        userLat: formData.get("userLat"),
        userLong: formData.get("userLong"),
    });

    if (!result.success) {
        console.log(result.error);
        return {
            status: "failed",
            msg: "Invalid input"
        }
    }

    const { userLat, userLong, stationName } = result.data;

    try {
        await connectDB();

        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session) {
            return {
                status: "failed",
                msg: "Unauthorized",
            };
        }

        await ChargingStation.create({
            stationName: stationName,
            owner: session.user.id,
            location: {
                type: "Point",
                coordinates: [
                    parseFloat(userLat),
                    parseFloat(userLong),
                ],
            },
        });
        return {
            status: "success",
            msg: "Charging Station Created Successfully"
        };
    } catch (error) {
        console.error("Error during creating charging station:", error);
        return {
            status: "failed",
            msg: "Error during creating charging station"
        };
    }
}