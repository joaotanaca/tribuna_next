import React, {
    ComponentType,
    MutableRefObject,
    useCallback,
    useMemo,
    useRef,
    useState,
} from "react";
import { toolbar } from "constants/quill";
import dynamic from "next/dynamic";
import { JoditProps } from "jodit-react";

const Quill: React.FC<{ onChange: (value: string) => void, defaultValue? :string }> = ({
    onChange,
    defaultValue=""
}) => {
    const JoditEditor = useMemo(
        () =>
            dynamic(() => import("jodit-react"), {
                ssr: false,
            }) as ComponentType<JoditProps & { ref: MutableRefObject<null> }>,
        [],
    );
    const editor = useRef(null);
    const [content, setContent] = useState(defaultValue);

    const handleChange = useCallback(
        (value) => {
            setContent(value);
            onChange(value);
        },
        [onChange],
    );

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={toolbar}
            onBlur={handleChange}
        />
    );
};

export default Quill;
