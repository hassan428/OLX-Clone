import { userModel } from "@/lib/schema/profileSchema";
import { createAuthToken, setAuthCookie } from "@/utils/auth";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  // Default response if user not found
  const commonResponse = Response.json({
    status: 404,
    message: "User not found!",
    success: false,
  });

  try {
    const { JWT_SECRET } = process.env;
    const token = await req.text();

    if (!token) return commonResponse;

    // Token Verify
    const decoded: any = jwt.verify(token, JWT_SECRET || "");
    console.log("Verified Token:", decoded);

    if (!decoded || !decoded._id) return commonResponse;

    // ✅ User fetch without password
    const findUser = await userModel.findById(decoded._id).select("-password");

    if (!findUser) return commonResponse;

    // ✅ Generate JWT (Token)
    const generateToken = await createAuthToken(findUser._id.toString());

    // ✅ Set Cookies
    await setAuthCookie(generateToken);

    return Response.json({
      data: findUser,
      message: "Request is successful",
      success: true,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return Response.json({
      status: 500,
      message: "Internal Server Error",
      success: false,
    });
  }
}
