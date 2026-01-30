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
        <fieldset className="fieldset border-base-300 rounded-box w-xs border p-4">
            <form action={formAction} className="grid">
                <div className="my-2">
                    <UserNameInput />
                </div>
                <div className="my-2">
                    <EmailInput />
                </div>
                <div className="my-2">
                    <PasswordInput />
                </div>
                {msg.status === "failed" && (
                    <div role="alert" className="alert alert-error alert-dash">
                        <span>{msg.msg}</span>
                    </div>
                )}
                <div className="my-4">
                    <Button btnName="Sign Up" btnType="submit" loading={pending} />
                </div>
            </form>
        </fieldset>
    );
}

export default Signup;