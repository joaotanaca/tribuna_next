import axios from "axios";
import Dropzone from "components/molecules/Dropzone";
import { PostModel } from "interfaces/models/Post";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuill } from "react-quilljs";

const PostPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = useForm<PostModel>();
    const { quill, quillRef } = useQuill();
    const [link, setLink] = useState("");
    const [article, setArticle] = useState("");
    const [img, setImg] = useState("");
    const onSubmit = async (data: PostModel) => {
        const { data: response } = await axios.post<PostModel>("/api/post", {
            ...data,
            image: img,
            article,
        });
        setLink(`/post/${response._id}/${response.title}`);
        console.log(data);
    };

    useEffect(() => {
        if (quill)
            quill.on("text-change", () => setArticle(quill.root.innerHTML));
    }, [quill, quillRef]);

    return (
        <>
            {link && (
                <div className="container mx-auto mt-16">
                    <Link passHref href={link as any}>
                        <a target="_blank">Post publicado</a>
                    </Link>
                </div>
            )}
            <form
                className="flex flex-col gap-4 mx-auto container mt-16"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col col-span-2">
                        <label htmlFor="title">Titulo:</label>
                        <input type="text" {...register("title")} />
                    </div>
                    <div className="flex flex-col col-span-1">
                        <label htmlFor="title">Subtitulo:</label>
                        <input type="text" {...register("subtitle")} />
                    </div>
                    <div className="flex flex-col col-span-1">
                        <label htmlFor="title">Autor:</label>
                        <input type="text" {...register("authorship")} />
                    </div>
                    <div className="col-span-2">
                        <Dropzone onChange={(img) => setImg(img as string)} />
                    </div>
                </div>
                <div className="w-full">
                    <div ref={quillRef} />
                </div>

                <button type="submit" disabled={isSubmitting || !isValid}>
                    {isSubmitting ? "Enviando" : "Enviar"}
                </button>
            </form>
        </>
    );
};

export default PostPage;
