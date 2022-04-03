import React from "react";
import Head from "next/head";
import CreatePost from "page/Post/Create";
import { GetServerSidePropsContext, NextPage } from "next";
import axios from "axios";
import { PostModel } from "interfaces/models/Post";
import Post from "models/Post";
import { validateUuid } from "lib/uuid";

const PostPage: NextPage<{ post: PostModel }> = ({ post }) => {
    return (
        <>
            <Head>
                <title>Criação de Post</title>
            </Head>
            <CreatePost {...post} />
        </>
    );
};

export async function getServerSideProps(
    context: GetServerSidePropsContext<{ id: string }>,
) {
    const id = context?.params?.id as string;
    let post = null;

    if (id !== "new" && validateUuid(id)) {
        const result = await Post.findById(id);
        post = JSON.stringify(result);
        post = JSON.parse(post as string);
    }

    return {
        props: {
            post,
        },
    };
}

export default PostPage;
