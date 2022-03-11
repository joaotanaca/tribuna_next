import { NextApiRequest, NextApiResponse } from "next";
import Post from "db/models/Post";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    let post;
    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case "GET":
            post = await getPost(id);

            if (post) return res.status(200).send(post);
            return res.status(404).send("Not Found");

        case "DELETE":
            post = await deletePost(id);
            return res.status(202).send(post);
            
        default:
            return res.status(405).send("Method not allowed");
    }
}

const getPost = async (id: string | string[]) => {
    const post = await Post.findById(id);
    return post;
};

const deletePost = async (id: string | string[]) => {
    const post = await Post.findByIdAndDelete(id);
    return post;
};

export default handler;
