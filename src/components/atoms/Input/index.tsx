import { PostModel } from "interfaces/models/Post";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { UseFormRegister } from "react-hook-form";

import { Container, Error } from "./styles";

type PropsT = React.InputHTMLAttributes<HTMLInputElement> & {
    name: string | any;
    error?: string;
    register: UseFormRegister<PostModel>;
};

const Input: React.FC<PropsT> = ({
    className = "",
    placeholder,
    error,
    name,
    value,
    register,
    ...props
}) => {
    const [active, setActive] = useState(false);
    const { onChange, onBlur, ...registerProps } = register(name);
    const eventTypes = useMemo(
        () => ({ change: onChange, blur: onBlur }),
        [onBlur, onChange],
    );
    const handleEvent = useCallback(
        (type: "change" | "blur") => {
            return (event: React.FocusEvent<HTMLInputElement, Element>) => {
                const { value } = event.currentTarget;
                if (value && !active) {
                    setActive(true);
                } else if (!value) {
                    setActive(false);
                }
                eventTypes[type]?.(event);
            };
        },
        [active, eventTypes],
    );

    useEffect(() => {
        if (value) {
            setActive(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Container
                className={`${className} ${
                    error && "error"
                } relative rounded-lg`}
            >
                <label
                    className={
                        active
                            ? "active absolute transition-all text-sm select-none"
                            : "absolute transition-all text-base font-normal text-base select-none"
                    }
                    htmlFor={name}
                >
                    {placeholder}
                </label>
                <input
                    onChange={handleEvent("change")}
                    onBlur={handleEvent("blur")}
                    className="w-full text-base outline-none bg-transparent font-normal rounded-lg p-2 z-10"
                    {...props}
                    {...registerProps}
                />
            </Container>
            {error && <Error>{error}</Error>}
        </div>
    );
};

export default Input;
