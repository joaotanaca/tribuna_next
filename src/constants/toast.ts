import { AiOutlineCheck } from "react-icons/ai";
import { UpdateOptions } from "react-toastify";

export const defaultConfig = { autoClose: 3000 };

export const acceptConfig: UpdateOptions = {
    ...defaultConfig,
    icon: AiOutlineCheck,
    isLoading: false,
};

export const errorConfig: UpdateOptions = {
    ...defaultConfig,
    type: "error",
    isLoading: false,
};
