import { NextApiRequest, NextApiResponse } from "next";
import Post from "db/models/Post";
import { PostModel } from "interfaces/models/Post";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { q },
        body,
        method,
    } = req;
    let post;
    switch (method) {
        case "GET":
            post = await Get(q as string);

            return res.status(200).send(post);

        case "POST":
            post = await Create(body);

            if (post) return res.status(200).send(post);
            return res.status(400).send("Bad Request");

        default:
            return res.status(405).send("Method not allowed");
    }
}
const Get = async (text: string) => {
    const post = await Post.find({ $text: { $search: text } });
    return post;
};

const Create = async ({ id, ...body }: PostModel) => {
    const post = await Post.create(body);
    return post;
};

export default handler;
