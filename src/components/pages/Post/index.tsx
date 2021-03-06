/* eslint-disable @next/next/no-img-element */
import { PostModel } from "interfaces/models/Post";
import { ContainerHeader, Container, Content } from "./styles";
import React from "react";

const Post: React.FC<PostModel> = (post) => {
    return (
        <Container>
            <ContainerHeader>
                <h1 className="col-span-12 font-bold">{post?.title}</h1>
                <h2 className="col-span-12 text-xl">{post?.subtitle}</h2>
                <div className="col-span-12 flex flex-col items-center text-base">
                    <p>
                        Por: <b>{post.authorship}</b> - {post?.createdAt}
                    </p>
                    <p>Atualizado em {post?.updatedAt}</p>
                </div>
            </ContainerHeader>
            <div>
                <img
                    src={post.image}
                    alt="dsadsa"
                    className="w-full object-cover object-center"
                />
            </div>
            <br />
            <Content
                className="text-justify text-lg"
                dangerouslySetInnerHTML={{ __html: post?.article || "" }}
            />
        </Container>
    );
};

export default Post;
