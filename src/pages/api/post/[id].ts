import { NextApiRequest, NextApiResponse } from "next";
import Post from "db/models/Post";
import { PostModel } from "interfaces/models/Post";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    let post;
    const {
        query: { id },
        body,
        method,
    } = req;

    switch (method) {
        case "GET":
            post = await Get(id);

            if (post) return res.status(200).send(post);
            return res.status(404).send("Not Found");

        case "PUT":
            post = await Put(id as string, body);

            if (post) return res.status(200).send(post);
            return res.status(404).send("Not Found");

        case "DELETE":
            post = await Delete(id);
            return res.status(202).send(post);

        default:
            return res.status(405).send("Method not allowed");
    }
}

const Get = async (id: string | string[]) => {
    const post = await Post.findById(id);
    return post;
};

const Put = async (id: string, body: PostModel) => {
    const post = await Post.findByIdAndUpdate(id, body);
    return post;
};

const Delete = async (id: string | string[]) => {
    const post = await Post.findByIdAndDelete(id);
    return post;
};

export default handler;
