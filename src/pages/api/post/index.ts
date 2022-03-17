import { NextApiRequest, NextApiResponse } from "next";
import Post from "db/models/Post";
import { PostModel } from "interfaces/models/Post";
import { getErrors } from "lib/errors";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { q, fields },
        body,
        method,
    } = req;
    let post;
    switch (method) {
        case "GET":
            post = await Get(q as string, fields as string);

            return res.status(200).send(post);

        case "POST":
            post = await Create(body);
            if (post?.type === "error") return res.status(400).send(post);
            if (post) return res.status(200).send(post);
            return res.status(400).send("Bad Request");

        default:
            return res.status(405).send("Method not allowed");
    }
}

const Get = async (text: string, fields: string = "") => {
    const query: { [key: string]: any } = {};
    if (text) {
        query["$text"] = { $search: text };
    }

    const post = await Post.find(query).select(fields.replace(",", " "));

    return post;
};

const Create = async ({ id, ...body }: PostModel) => {
    let response;
    try {
        response = await Post.create(body);
    } catch (err: any) {
        response = getErrors(err);
    }
    return response;
};

export default handler;
