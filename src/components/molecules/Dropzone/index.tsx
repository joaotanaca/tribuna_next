import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { getBase64 } from "../../../lib/base64";
import { ContainerDrop } from "./styles";

const Dropzone: React.FC<{
    onChange: (img: string | string[]) => void;
}> = ({ onChange }) => {
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
        getBase64(file, onChange);
        return <li key={file.name}>{file.name}</li>;
    });

    return (
        <section className="container">
            <ContainerDrop
                {...getRootProps({
                    className: `${
                        isFocused
                            ? "focus"
                            : isDragAccept
                            ? "accept"
                            : isDragReject && "reject"
                    } dropzone flex flex-col items-center p-5 rounded-md border border-dashed outline-none`,
                })}
            >
                <input {...getInputProps()} />
                <p>Selecione ou arraste uma imagem aqui</p>
            </ContainerDrop>
            <aside>
                <ul>{files}</ul>
            </aside>
        </section>
    );
};

export default Dropzone;
