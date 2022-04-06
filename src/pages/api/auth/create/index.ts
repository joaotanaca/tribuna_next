import { NextApiRequest, NextApiResponse } from "next";
import { UserModel } from "interfaces/models/User";
import User from "db/models/User";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    let user;
    const { body, method } = req;

    switch (method) {
        case "POST":
            user = await Post(body);

            if (user) return res.status(201).send(user);
            return res.status(400).send("Algo deu errado");

        default:
            return res.status(405).send("Method not allowed");
    }
}

const Post = async (body: UserModel) => {
    const user = await User.create(body);
    return user;
};

export default handler;
