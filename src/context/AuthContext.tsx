import {
    createContext,
    PropsWithChildren,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";

import axios from "axios";

type User = {
    name: string;
    email: string;
    avatar_url: string;
};

type SignInData = {
    email: string;
    password: string;
};

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: PropsWithChildren<any>) {
    const [user, setUser] = useState<User | null>(null);

    const isAuthenticated = !!user;

    useEffect(() => {
        const { token: token } = parseCookies();

        if (token) {
            // recoverUserInformation().then(
            //     (response: { user: SetStateAction<User | null> }) => {
            //         setUser(response.user);
            //     },
            // );
        }
    }, []);

    async function signIn(data: SignInData) {
        const {
            data: { token, user },
        } = await axios.post("/api/auth/login", data);

        setCookie(undefined, "token", token, {
            maxAge: 60 * 60 * 0.25, // 15 min
        });

        // setUser(user);

        // Router.push("/dashboard");
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    );
}
