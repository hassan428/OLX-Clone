import { userModel } from "@/lib/schema/profileSchema";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

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
    console.log("token nahi hain", token);

    if (!token) return commonResponse;

    // Verify the token
    const verifyToken = jwt.verify(token, JWT_SECRET || "");
    console.log("Verified Token:", verifyToken);

    if (!verifyToken) return commonResponse;

    // Simulate user fetch from DB
    const findUser = await userModel.findById(verifyToken);
    // const findUser = await userModel.findById(verifyToken?._id);

    if (!findUser) return commonResponse;

    // Generate new token
    const jwt_payload = { _id: findUser._id }; // Ensure _id exists in token
    const generateToken = jwt.sign(jwt_payload, JWT_SECRET || "", {
      expiresIn: "7d",
    });
    console.log("Generated Token:", generateToken);

    // Set new token in cookies
    (await cookies()).set(
      process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY || "",
      generateToken,
    );

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
