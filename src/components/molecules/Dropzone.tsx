import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { getBase64 } from "../../lib/base64";
const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
};

const focusedStyle = {
    borderColor: "#2196f3",
};

const acceptStyle = {
    borderColor: "#00e676",
};

const rejectStyle = {
    borderColor: "#ff1744",
};
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

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isFocused ? focusedStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isFocused, isDragAccept, isDragReject],
    );
    const files = acceptedFiles.map((file) => {
        getBase64(file, onChange);
        return (
            <li key={file.name}>
                {file.name}
            </li>
        );
    });

    return (
        <section className="container">
            <div
                {...getRootProps({
                    className: "dropzone",
                    style: style as React.CSSProperties,
                })}
            >
                <input {...getInputProps()} />
                <p>Selecione ou arraste uma imagem aqui</p>
            </div>
            <aside>
                <ul>{files}</ul>
            </aside>
        </section>
    );
};

export default Dropzone;
