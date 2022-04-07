import jwt, { Secret } from "jsonwebtoken";

export function jwtIncode(data: any) {
    const token = jwt.sign({...data}, process.env.JWT_KEY as Secret);
    return token;
}

export const jwtDecode = (token: string) => {
    jwt.verify(token, process.env.JWT_KEY as Secret);
};
