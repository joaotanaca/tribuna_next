/* eslint-disable @next/next/no-img-element */
import { FileT } from "interfaces/dropzone";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { getBase64 } from "../../../lib/base64";
import { ContainerDrop } from "./styles";

const Dropzone: React.FC<{
    onChange: (preview: FileT) => void;
}> = ({ onChange }) => {
    const [preview, setPreview] = useState({ name: "", img: "" });
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

    const dropActions = useMemo(() => {
        if (isFocused) {
            return "focus";
        } else if (isDragAccept) {
            return "accept";
        } else if (isDragAccept) {
            return "accept";
        } else if (isDragReject) {
            return "reject";
        }
        return "";
    }, [isDragAccept, isDragReject, isFocused]);

    const handlePreview = useCallback((key: string, value: string) => {
        const objPreview: { [key: string]: string } = {};
        objPreview[key] = value;
        setPreview((prev) => ({ ...prev, ...objPreview }));
    }, []);

    useEffect(() => {
        onChange(preview);
    }, [onChange, preview]);

    useEffect(() => {
        acceptedFiles.forEach((file) => {
            handlePreview("name", file.name);
            getBase64(file, (img: string) => handlePreview("img", img));
        });
    }, [acceptedFiles, handlePreview]);

    return (
        <section className="container grid grid-cols-10 gap-4">
            <ContainerDrop
                {...getRootProps({
                    className: `${dropActions} dropzone flex flex-col items-center justify-center p-5 rounded-md border border-dashed outline-none col-span-10`,
                })}
            >
                <input {...getInputProps()} />
                <p>Selecione ou arraste uma imagem aqui</p>
            </ContainerDrop>
            {acceptedFiles.length > 0 && (
                <aside className="col-span-10">
                    <div className="flex gap-4 items-center h-full preview-image">
                        <img
                            src={preview.img}
                            width="100%"
                            alt="img-preview"
                            className="w-full rounded-lg object-cover"
                        />
                    </div>
                </aside>
            )}
        </section>
    );
};

export default Dropzone;
