import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { userModel } from "@/lib/schema/profileSchema";
import { otpModel } from "@/lib/schema/otpSchema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { JWT_SECRET } = process.env;

    const findUser = await userModel.findById(body._id);

    if (!findUser) {
      return Response.json({
        message: "User not found!",
        status: 404,
        success: false,
      });
    }

    const findOTP = await otpModel.findOne({ user_id: findUser._id });

    if (!findOTP || findOTP.otp !== body.otp) {
      return Response.json({
        message: "Otp is incorrect",
        status: 400,
        success: false,
      });
    }

    // ✅ User ko verified mark karo
    findUser.isVerified = true;
    await findUser.save();

    // ✅ OTP delete kar do
    await otpModel.deleteOne({ _id: findOTP._id });

    // ✅ JWT token generate
    const jwt_payload = { _id: findUser._id };
    const generateToken =
      JWT_SECRET && jwt.sign(jwt_payload, JWT_SECRET, { expiresIn: "7d" });

    (await cookies()).set(
      process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY || "",
      generateToken || ""
    );

    return Response.json({
      data: findUser,
      message: "User verified and logged in successfully",
      success: true,
    });
  } catch (error) {
    console.error("error", error);
    return Response.json({
      message: "Internal Server Error",
      status: 500,
      success: false,
    });
  }
}