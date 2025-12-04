"use client";
import { useState } from "react";
import UserNameInput from "./UserNameInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import Button from "./Button";
import { SignupUser } from "../lib/action";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <fieldset className="fieldset border-base-300 rounded-box w-xs border p-4">
            <form action={SignupUser} className="grid">
                <div className="my-2">
                    <UserNameInput username={username} setUsername={setUsername} />
                </div>
                <div className="my-2">
                    <EmailInput email={email} setEmail={setEmail} />
                </div>
                <div className="my-2">
                    <PasswordInput password={password} setPassword={setPassword} />
                </div>

                <div className="my-4">
                    <Button btnName="Sign Up" btnType="submit" />
                </div>
            </form>
        </fieldset>
    );
}

export default Signup;