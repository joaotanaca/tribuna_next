async function fetchJson<Response = any>(
    url: RequestInfo,
    options?: RequestInit,
) {
    const response = await (
        await fetch(`${process.env.BASE_URL}${url}`, options)
    ).json();
    return response as Response;
}
export default fetchJson;
