import mongoose from "mongoose";
export const validateUuid = (uuid: string) =>
    mongoose.Types.ObjectId.isValid(uuid);
