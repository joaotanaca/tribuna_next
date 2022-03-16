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
        watch,
        formState: { errors },
    } = useForm<PostModel>();
    const [link, setLink] = useState("");
    const { quill, quillRef } = useQuill();
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
            <form
                className="flex flex-col gap-4 mx-auto container mt-16"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <input type="text" {...register("title")} />
                </div>
                <div>
                    <input type="text" {...register("subtitle")} />
                </div>
                <div>
                    <Dropzone onChange={(img) => setImg(img as string)} />
                </div>
                <div className="w-full">
                    <div ref={quillRef} />
                </div>
                <div>
                    <input type="text" {...register("authorship")} />
                </div>
                <button type="submit">Enviar</button>
            </form>
            {link && (
                <Link passHref href={link as any}>
                    <a>link</a>
                </Link>
            )}
        </>
    );
};

export default PostPage;
