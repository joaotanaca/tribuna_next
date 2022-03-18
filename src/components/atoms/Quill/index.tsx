import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import styled from "styled-components";
import { toolbar } from "constants/quill";

export const Container = styled.div`
    .ql-editor {
        min-height: 300px;
    }
`;

const Quill: React.FC<{ onChange: (value: string) => void }> = ({
    onChange,
}) => {
    const { quill, quillRef } = useQuill({
        modules: {
            toolbar,
        },
    });

    useEffect(() => {
        if (quill)
            quill.on("text-change", () => onChange(quill.root.innerHTML));
    }, [onChange, quill]);

    return <Container ref={quillRef} />;
};

export default Quill;
