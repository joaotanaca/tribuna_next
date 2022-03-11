import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../db/models/Post";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const post = await Post.create({});
    return res.status(200).send(req.headers.host);
}

export default handler;
