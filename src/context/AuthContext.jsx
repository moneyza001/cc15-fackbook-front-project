import { createContext, useState } from "react";
import axios from "../config/axios";
import { addAccessToken } from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState({});

    const login = async (credential) => {
        try {
            const res = await axios.post("/auth/login", credential);
            addAccessToken(res.data.accessToken);
            setAuthUser(res.data.user);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <AuthContext.Provider value={{ login }}>
            {children}
        </AuthContext.Provider>
    );
}
