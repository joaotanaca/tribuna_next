import axios from "axios";
import Button from "atoms/Button";
import Quill from "atoms/Quill";
import Input from "atoms/Input";
import Dropzone from "molecules/Dropzone";
import { PostKeys, PostModel } from "interfaces/models/Post";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { watch } from "fs";
import { useRouter } from "next/router";

const PostPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        watch,
        formState: { isSubmitting, errors, isValid },
    } = useForm<PostModel>();

    const [link, setLink] = useState("");
    const [article, setArticle] = useState("");
    const [img, setImg] = useState("");

    const onSubmit = async (data: PostModel) => {
        try {
            const { data: response } = await axios.post<PostModel>(
                "/api/post",
                {
                    ...data,
                    image: img,
                    article,
                },
            );
            setLink(`/post/${response._id}/${response.title}`);
        } catch (err: any) {
            Object.keys(err.response.data).forEach((field) => {
                if (field === "type") return;

                setError(field as PostKeys, {
                    message: err.response.data[field],
                });
            });
        }
    };

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
                onChange={() => {
                    if (Object.keys(errors).length) clearErrors();
                }}
            >
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col col-span-2">
                        <Input
                            placeholder="Titulo"
                            type="text"
                            error={errors.title?.message}
                            name="title"
                            register={register}
                        />
                    </div>
                    <div className="flex flex-col col-span-1">
                        <Input
                            placeholder="Subtitulo"
                            type="text"
                            error={errors.subtitle?.message}
                            name="subtitle"
                            register={register}
                        />
                    </div>
                    <div className="flex flex-col col-span-1">
                        <Input
                            placeholder="Autor"
                            type="text"
                            error={errors.authorship?.message}
                            name="authorship"
                            register={register}
                        />
                    </div>
                    <div className="col-span-2">
                        <Dropzone onChange={(img) => setImg(img as string)} />
                    </div>
                </div>
                <div className="w-full">
                    <Quill onChange={setArticle} />
                </div>

                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando" : "Enviar"}
                </Button>
                {/* <Button onClick={} type="button" disabled={!isValid}>
                    Preview
                </Button> */}
            </form>
        </>
    );
};

export default PostPage;
