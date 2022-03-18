import Post from "page/Post";
import PostModelDb from "models/Post";
import { PostModel } from "interfaces/models/Post";
import type { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const PostPage: NextPage<{ info: PostModel; preview: boolean }> = ({
    info,
    preview,
}) => {
    const [post, setPost] = useState(info);
    const { push } = useRouter();

    useEffect(() => {
        if (preview) {
            const json = localStorage.getItem("previewData") as string;
            setPost(JSON.parse(json));
            setTimeout(() => {
                localStorage.removeItem("previewData");
            }, 500);

            axios.delete("/api/preview");
        } else if (!post?.title) {
            push("/_error");
        }
    }, [post?.title, preview, push]);

    return (
        <>
            <Head>
                <title>{post?.title}</title>
            </Head>
            <div className="mt-16">
                <Post {...post} />
            </div>
        </>
    );
};

export async function getStaticPaths() {
    const data = await PostModelDb.find<PostModel>({}).select("_id title");
    const paths = data.map(({ _id, title }) => ({
        params: { params: [`${_id}`, `${title}`] },
    }));

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps(context: GetStaticPropsContext) {
    let post = {};
    if (!context.preview) {
        const [id] = context.params?.params as string[];
        const result = await PostModelDb.findById(id);
        post = JSON.stringify(result);
        post = JSON.parse(post as string);
    }

    return { props: { info: post, preview: !!context.preview } };
}

export default PostPage;
