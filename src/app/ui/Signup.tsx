"use client";
import UserNameInput from "./UserNameInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import Button from "./Button";
import { SignupUser } from "../lib/action";
import { useActionState } from "react";
import { formState } from "../Types";


function Signup() {
    const [msg, formAction, pending] = useActionState<formState, FormData>(SignupUser, { status: "", msg: "" });
    return (
        <form action={formAction} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Username</label>
                <UserNameInput />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <EmailInput />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                <PasswordInput />
            </div>

            {msg.status === "failed" && (
                <div role="alert" className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{msg.msg}</span>
                </div>
            )}

            <div className="pt-2">
                <Button btnName="Sign Up" btnType="submit" loading={pending} />
            </div>
        </form>
    );
}

export default Signup;