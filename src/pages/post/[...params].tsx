import { PostModel } from "interfaces/models/Post";
import fetchJson from "lib/fetch";
import type { GetStaticPropsContext, NextPage } from "next";

const PostPage: NextPage<{ post: PostModel }> = ({ post }) => {
    return (
        <div className="container mx-auto mt-16">
            <div className="w-full text-center">
                <h1>{post?.title}</h1>
                <h2>{post?.subtitle}</h2>
            </div>
            <br />
            <div dangerouslySetInnerHTML={{ __html: post?.article || "" }} />
        </div>
    );
};

export async function getStaticPaths() {
    const data = await fetchJson<PostModel[]>("/api/post?fields=_id,title");
    const paths = data.map(({ _id, title }) => ({
        params: { params: [_id, title] },
    }));
    
    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const [id] = context.params?.params as string[];

    const post = await fetchJson<PostModel[]>(`/api/post/${id}`);
    return { props: { post } };
}

export default PostPage;
