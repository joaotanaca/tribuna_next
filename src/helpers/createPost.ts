import axios from "axios";
import { acceptConfig } from "constants/toast";
import { PostModel } from "interfaces/models/Post";
import { ReactText } from "react";
import { toast } from "react-toastify";

export const handlePost = async (
    data: PostModel,
    toastId: ReactText,
    onClick: any,
) => {
    const body = { ...data };
    if (body._id) {
        const { data: response } = await axios.put<PostModel>(
            `/api/post/${body._id}`,
            body,
        );
        toast.update(toastId, {
            render: "Atualizado!",
            onClick:onClick(response),
            ...acceptConfig,
        });
        return { type: "put", response };
    }
    body.createdAt = body.updatedAt;
    const { data: response } = await axios.post<PostModel>("/api/post", body);
    toast.update(toastId, {
        render: "Publicado!",
        onClick:onClick(response),
        ...acceptConfig,
    });
    return { type: "post", response };
};
