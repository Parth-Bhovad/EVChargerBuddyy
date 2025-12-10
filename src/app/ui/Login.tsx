"use client";
import { useActionState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import Button from "./Button";
import { LoginUser } from "../lib/action";
import { redirect } from "next/navigation";
import {formState} from "@/app/Types";


function Login() {
    const [msg, formAction, pending] = useActionState<formState, FormData>(LoginUser, { status: "", msg: "" });
    if (msg.status === "success") {
        redirect("/profile");
    }
    return (
        <fieldset className="fieldset border-base-300 rounded-box w-xs border p-4">
            <form action={formAction} className="grid">
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
                    <Button btnName="Log In" btnType="submit" loading={pending} />
                </div>
            </form>
        </fieldset>
    );
}

export default Login;