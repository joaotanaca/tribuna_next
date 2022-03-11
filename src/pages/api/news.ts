import { NextApiRequest, NextApiResponse } from "next";
import Post from "db/models/Post";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { title, subtitle, image, authorship, article } = req.query;
    const post = await Post.create({
        title,
        subtitle,
        image,
        authorship,
        article,
    });
    return res.status(200).send(`ID: ${post._id}`);
}

export default handler;
