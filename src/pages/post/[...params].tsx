import Post from "db/models/Post";
import { PostModel } from "interfaces/models/Post";
import fetchJson from "lib/fetch";
import type { GetStaticPropsContext, NextPage } from "next";

const PostPage: NextPage<{ post: PostModel }> = ({ post }) => {
    console.log(post);
    
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
    const data = await Post.find<PostModel>({}).select("_id title");
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
    const result = await Post.findById(id);
    const post = JSON.stringify(result);
    return { props: { post: JSON.parse(post) } };
}

export default PostPage;
