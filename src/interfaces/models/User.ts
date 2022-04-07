export type UserModel = {
    _id?: string;
    name: string;
    email: string;
    avatar: string;
    password?: string;
};

export type UserKeys = "_id" | "name" | "email" | "avatar" | "password";
