import { AiOutlineCheck } from "react-icons/ai";
import { UpdateOptions } from "react-toastify";


export const acceptConfig: UpdateOptions = {
    icon: AiOutlineCheck,
    isLoading: false,
};

export const errorConfig: UpdateOptions = {
    type: "error",
    isLoading: false,
};
