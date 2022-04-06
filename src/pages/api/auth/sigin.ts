import { NextApiRequest, NextApiResponse } from "next";
import { UserModel } from "interfaces/models/User";
import User from "db/models/User";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    let user;
    const { body, method } = req;

    switch (method) {
        case "POST":
            user = await Post(body);

            if (user) return res.status(200).send(user);
            return res.status(400).send("Email ou senha incorretos");

        default:
            return res.status(405).send("Method not allowed");
    }
}

const Post = async ({ email, password }: UserModel) => {
    const user = await User.findOne<UserModel>({ email });

    if (user?.password === password) {
        return user;
    }

    return null;
};

export default handler;
