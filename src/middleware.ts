import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authTokenName } from "@/utils/constant";

// This function can be marked `async` if using `await` inside
export default function authMiddleware(request: NextRequest) {
  const token = request.cookies.get(authTokenName);
  console.log("token", token);
  return token
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/api", "/api/login"],
};
// "/(home)/:path*" "/post",       , "/post", "/editprofile"
