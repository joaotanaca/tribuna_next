import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const PostPage: React.FC = () => {
    const { quill, quillRef } = useQuill();
    const [article, setArticle] = useState("");
    useEffect(() => {
        if (quill)
            quill.on("text-change", () => setArticle(quill.root.innerHTML));
    }, [quill, quillRef]);
    return (
        <>
            <form className="flex flex-col gap-4 mx-auto w-3/4 mt-16">
                <div>
                    <input type="text" name="title" id="" />
                </div>
                <div>
                    <input type="text" name="subtitle" id="" />
                </div>
                <div className="w-full">
                    <div ref={quillRef} />
                </div>
            </form>
            <div
                className="mx-auto w-3/4"
                dangerouslySetInnerHTML={{ __html: article }}
            />
        </>
    );
};

export default PostPage;
