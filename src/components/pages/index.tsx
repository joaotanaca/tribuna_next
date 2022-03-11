import axios from "axios";
import React, { useEffect, useState } from "react";
import Article from "../organisms/Article";

type Article = {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

const Home: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    useEffect(() => {
        axios
            .get("https://newsapi.org/v2/top-headlines", {
                params: {
                    language: "pt",
                    apiKey: "bfd5591a08b747a28ad13d615e543e12",
                },
            })
            .then(({ data }) => {
                console.log(data);
                setArticles(data.articles);
            });
    }, []);
    return (
        <div className="container mx-auto grid grid-cols-12 gap-4">
            {articles.map((article) => (
                <Article key={article.title} {...article} />
            ))}
        </div>
    );
};

export default Home;
