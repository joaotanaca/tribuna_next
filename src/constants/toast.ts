import { AiOutlineCheck } from "react-icons/ai";
import { UpdateOptions } from "react-toastify";

export const acceptConfig: UpdateOptions = {
    icon: AiOutlineCheck,
    isLoading: false,
    autoClose: 3000,
};

export const errorConfig: UpdateOptions = {
    type: "error",
    isLoading: false,
    autoClose: 3000,
};
