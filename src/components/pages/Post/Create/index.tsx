import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import Button from "atoms/Button";
import Quill from "atoms/Quill";
import Input from "atoms/Input";
import Dropzone from "molecules/Dropzone";
import { PostKeys, PostModel } from "interfaces/models/Post";
import { lsset } from "lib/localstorage";
import { acceptConfig, errorConfig } from "constants/toast";
import { localeOptions } from "constants/date";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";

const Container = styled.div.attrs({ className: "mx-auto" })`
    max-width: 1080px;
    .jodit-container {
        text-align: justify;
    }
    .preview-image {
        img {
            height: 430px;
        }
    }
`;

const CreatePost: React.FC<PostModel> = (post) => {
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        watch,
        formState: { isSubmitting, errors, isValid },
    } = useForm<PostModel>({ defaultValues: post });

    const [link, setLink] = useState("");
    const [article, setArticle] = useState("");
    const [img, setImg] = useState(post.image || "");
    const values = watch();

    const date = new Date().toLocaleDateString(...localeOptions);

    const onSubmit = async (data: PostModel) => {
        const id = toast.loading("Publicando");
        try {
            const body = {
                ...data,
                image: img,
                article,
                updatedAt: date,
            };
            
            if (post._id) {
                const { data: response } = await axios.put<PostModel>(
                    `/api/post/${post._id}`,
                    body,
                );
                toast.update(id, {
                    render: "Atualizado!",
                    onClick: () =>
                        window.open(
                            `/post/${response._id}/${response.title}`,
                            "_blank",
                        ),
                    ...acceptConfig,
                });
                setLink(`/post/${response._id}/${response.title}`);
            }else{
                body.createdAt = date;
                const { data: response } = await axios.post<PostModel>(
                    "/api/post",
                    body,
                );
                toast.update(id, {
                    render: "Publicado!",
                    onClick: () =>
                        window.open(
                            `/post/${response._id}/${response.title}`,
                            "_blank",
                        ),
                    ...acceptConfig,
                });
                setLink(`/post/${response._id}/${response.title}`);
            }
        } catch (err: any) {
            Object.keys(err.response.data).forEach((field) => {
                if (field === "type") return;

                setError(field as PostKeys, {
                    message: err.response.data[field],
                });
            });
            toast.update(id, {
                render: "Erro ao publicar!",
                ...errorConfig,
            });
        }
    };

    const onPreview = async () => {
        await axios.post<PostModel>("/api/preview");

        lsset("previewData", {
            ...values,
            image: img,
            article,
            createdAt: date,
            updatedAt: date,
        });
        window.open(`/post/preview/${values.title}`, "_blank")?.focus();
    };

    return (
        <Container>
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
                            value={values.title}
                            register={register}
                        />
                    </div>
                    <div className="flex flex-col col-span-1">
                        <Input
                            placeholder="Subtitulo"
                            type="text"
                            error={errors.subtitle?.message}
                            name="subtitle"
                            value={values.subtitle}
                            register={register}
                        />
                    </div>
                    <div className="flex flex-col col-span-1">
                        <Input
                            placeholder="Autor"
                            type="text"
                            error={errors.authorship?.message}
                            name="authorship"
                            value={values.authorship}
                            register={register}
                        />
                    </div>
                    <div className="col-span-2">
                        <Dropzone
                            defaultValue={values.image}
                            onChange={(image) => setImg(image.img)}
                        />
                    </div>
                </div>
                <div className="w-full">
                    <Quill onChange={setArticle} defaultValue={post.article} />
                </div>

                <div className="flex gap-4">
                    <Button
                        className="w-full"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Publicando" : "Publicar"}
                    </Button>
                    <Button
                        className="w-full"
                        onClick={onPreview}
                        type="button"
                        disabled={!isValid}
                    >
                        Preview
                    </Button>
                </div>
            </form>
        </Container>
    );
};

export default CreatePost;
