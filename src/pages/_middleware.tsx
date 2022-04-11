import { NextRequest, NextResponse } from "next/server";
import { validationCookie } from "lib/auth";

export function middleware(req: NextRequest) {
    // Add the user token to the response
    return validationCookie(req, NextResponse.next());
}
