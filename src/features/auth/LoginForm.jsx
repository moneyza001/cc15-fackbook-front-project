import { useState } from "react";
import { toast } from "react-toastify";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";
import { useAuth } from "../../hook/use-auth";

export default function LoginForm() {
    const [input, setInput] = useState({
        emailOrMobile: "",
        password: "",
    });

    const { login } = useAuth();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        login(input).catch((error) => {
            toast(error.response.data.message);
        });
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
