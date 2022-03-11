/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container } from "../styles";
type Prop = {
    title: string;
    description: string;
    urlToImage: string;
};
const Article: React.FC<Prop> = ({ title, description, urlToImage }) => {
    return (
        <Container>
            <img
                src={urlToImage}
                alt={title}
                className="w-full object-cover rounded-lg"
            />
            <div className="title text-sm">{title}</div>
            <div
                dangerouslySetInnerHTML={{
                    __html: description,
                }}
            />
        </Container>
    );
};

export default Article;
