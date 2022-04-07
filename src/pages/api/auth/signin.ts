import { NextApiRequest, NextApiResponse } from "next";
import cookie from "js-cookie";
import { UserModel } from "interfaces/models/User";
import User from "db/models/User";
import { jwtIncode } from "lib/jwt";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { body, method } = req;

    switch (method) {
        case "POST":
            const data = await Post(body);

            if (data) return res.status(200).send(data);
            return res.status(400).send("Email ou senha incorretos");

        default:
            return res.status(405).send("Method not allowed");
    }
}

const Post = async ({ email, password }: UserModel) => {
    const user = await User.findOne<UserModel>({ email });

    if (user?.password === password) {
        const token = jwtIncode(user);

        delete user?.password;

        return { user, token };
    }

    return null;
};

export default handler;
