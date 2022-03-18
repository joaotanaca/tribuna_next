/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { getBase64 } from "../../../lib/base64";
import { ContainerDrop } from "./styles";

const Dropzone: React.FC<{
    onChange: (img: string | string[]) => void;
}> = ({ onChange }) => {
    const [preview, setPreview] = useState("");
    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject,
    } = useDropzone({
        accept: ["image/jpeg", "image/pjpeg", "image/png"],
        maxSize: 10000000,
        multiple: false,
    });

    const files = acceptedFiles.map((file) => {
        getBase64(file, setPreview);
        return (
            <div key={file.name} className="flex gap-4 items-center h-full">
                <img
                    src={preview}
                    alt="img-preview"
                    className="rounded-lg object-contain"
                />
                <b>{file.name}</b>
            </div>
        );
    });
    useEffect(() => {
        onChange(preview);
    }, [onChange, preview]);

    return (
        <section className="container grid grid-cols-12 gap-4">
            <ContainerDrop
                {...getRootProps({
                    className: `${
                        isFocused
                            ? "focus"
                            : isDragAccept
                            ? "accept"
                            : isDragReject && "reject"
                    } dropzone flex flex-col items-center p-5 rounded-md border border-dashed outline-none col-span-9`,
                })}
            >
                <input {...getInputProps()} />
                <p>Selecione ou arraste uma imagem aqui</p>
            </ContainerDrop>
            <aside>{files}</aside>
        </section>
    );
};

export default Dropzone;
