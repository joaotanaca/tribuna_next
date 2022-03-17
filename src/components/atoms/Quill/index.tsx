import { toolbar } from "constants/quill";
import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";

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

    return <div ref={quillRef} />;
};

export default Quill;
