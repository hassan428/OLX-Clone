import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const { JWT_SECRET, AUTH_TOKEN_KEY } = process.env;

export const createAuthToken = async (userId: string) => {
  if (!JWT_SECRET) {
    throw new Error("❌ JWT_SECRET is not defined in env");
  }
  return jwt.sign({ _id: userId }, JWT_SECRET, { expiresIn: "7d" });
};

export const setAuthCookie = async (token: string) =>
  (await cookies()).set(AUTH_TOKEN_KEY || "auth_token", token, {
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    path: "/",
  });

export const deleteAuthCookie = async () =>
  (await cookies()).delete(AUTH_TOKEN_KEY || "");
