export function lsset(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function lsget(key: string) {
    const value = localStorage.getItem(key) || "";
    return JSON.parse(value);
}
