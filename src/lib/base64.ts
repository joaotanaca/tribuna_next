export const getBase64 = (file: Blob, setImage: any) => {
    const files = new FileReader();
    files.onloadend = function () {
        setImage(files.result);
    };
    files.readAsDataURL(file);
};
