import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "DELETE") {
        res.clearPreviewData();
    } else {
        res.setPreviewData({});
    }
    res.end();
}

export default handler;
