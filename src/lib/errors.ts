export const getErrors = (err: any): { [key: string]: string } => {
    const errors: any = { type: "error" };
    Object.keys(err.errors).forEach((field) => {
        errors[field] = err?.errors?.[field]?.message;
    });
    return errors;
};
