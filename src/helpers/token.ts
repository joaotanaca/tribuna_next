import Cookies from "js-cookie";

export const setToken = (token: string) => {
    Cookies.set("token", token, {
        expires: 60 * 60 * 0.25, //15 min
    });
};

export const getToken = (): string | undefined => Cookies.get("token");
