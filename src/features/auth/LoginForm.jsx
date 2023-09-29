import { useState } from "react";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";
import axios from "../../config/axios";
import { useAuth } from "../../hook/use-auth";

export default function LoginForm() {
    const [input, setInput] = useState({
        emailOrMobile: "",
        password: "",
    });

    const { login } = useAuth();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        login(input);
    };

    return (
        <form className="grid gap-4" onSubmit={handleSubmitForm}>
            <LoginInput
                placeholder="Email adress or Phone number"
                value={input.emailOrMobile}
                onChange={(e) =>
                    setInput({ ...input, emailOrMobile: e.target.value })
                }
            />
            <LoginInput
                type="password"
                placeholder="Password"
                value={input.password}
                onChange={(e) =>
                    setInput({ ...input, password: e.target.value })
                }
            />
            <LoginButton />
        </form>
    );
}
