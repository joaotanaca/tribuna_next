import mongoose from "mongoose";
import { PostModel } from "interfaces/models/Post";
import connection from "../connection";

const PostSchema = async () => {
    await connection();
    return new mongoose.Schema<PostModel>({
        title: {
            type: String,
            required: [true, "É preciso adicionar o titulo do artigo."],
            maxlength: [20, "O titulo precisa ter no máximo 20 carácter."],
        },
        subtitle: {
            type: String,
            required: [true, "É preciso adicionar o subtitulo do artigo."],
        },
        image: {
            type: String,
            required: [true, "É preciso adicionar uma imagem de destaque."],
        },
        authorship: {
            type: String,
            required: [true, "É necessário author um artigo."],
        },
        article: {
            type: String,
            required: [true, "É necessário adicionar um artigo."],
        },
        tags: {
            type: [String],
        },
    });
};
export default mongoose.models.Post ||
    mongoose.model<PostModel>("Post", await PostSchema());
