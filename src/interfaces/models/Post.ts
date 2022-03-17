export type PostModel = {
    _id?: string;
    id?: string;
    title: string;
    subtitle: string;
    image: string;
    authorship: string;
    article: string;
    tags: string[];
};

export type PostKeys =
    | "_id"
    | "id"
    | "title"
    | "subtitle"
    | "image"
    | "authorship"
    | "article"
    | "tags";
