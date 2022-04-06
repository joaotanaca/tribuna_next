import mongoose from "mongoose";
import { UserModel } from "interfaces/models/User";
import connection from "../connection";

const UserSchema = async () => {
    await connection();
    const schema = new mongoose.Schema<UserModel>({
        name: {
            type: String,
            required: [true, "É preciso adicionar o name do artigo."],
        },
        email: {
            type: String,
            required: [true, "É preciso adicionar o subtitulo do artigo."],
        },
        avatar: {
            type: String,
            required: [true, "É preciso adicionar uma imagem."],
        },
        password: {
            type: String,
            required: [true, "É necessário author um artigo."],
        },
    }).index({
        name: "text",
        email: "text",
    });

    return schema;
};
export default mongoose.models.User ||
    mongoose.model<UserModel>("User", await UserSchema());
