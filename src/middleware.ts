import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export default function authMiddleware(request: NextRequest) {
  const getToken = request.cookies.get(process.env.AUTH_TOKEN_KEY || "");
  return getToken?.value
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/post", "/editprofile"],
};
