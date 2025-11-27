"use client";
import { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import Button from "./Button";
import { LoginUser } from "../lib/action";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <form action={LoginUser} className="grid">
            <div className="my-2">
                <EmailInput email={email} setEmail={setEmail} />
            </div>
            <div className="my-2">
                <PasswordInput password={password} setPassword={setPassword} />
            </div>

            <div className="my-4">
                <Button btnName="Log In" btnType="submit" />
            </div>
        </form>
    );
}

export default Login;