// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest, NextResponse } from "next/server";

export async function validationCookie(
    request: NextRequest,
    response: NextResponse,
) {
    const cookie = request.cookies.token;
    const url = request.nextUrl.clone();

    if (
        !cookie &&
        url.pathname.includes("/dashboard") &&
        !url.pathname.includes("/dashboard/login")
    ) {
        console.log(cookie);

        url.searchParams.append("urlCallback", url.pathname);
        url.pathname = `/dashboard/login`;

        return NextResponse.redirect(url);
    }

    return response;
}
