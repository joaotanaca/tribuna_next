import Post from "page/Post";
import PostModelDb from "models/Post";
import { PostModel } from "interfaces/models/Post";
import type { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";

const PostPage: NextPage<{ post: PostModel }> = ({ post }) => {
    return (
        <>
            <Head>
                <title>{post.title}</title>
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
    const [id] = context.params?.params as string[];
    const result = await PostModelDb.findById(id);
    const post = JSON.stringify(result);
    return { props: { post: JSON.parse(post) } };
}

export default PostPage;
