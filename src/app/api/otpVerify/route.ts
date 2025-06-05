import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { userModel } from "@/lib/schema/profileSchema";
import { otpModel } from "@/lib/schema/otpSchema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { JWT_SECRET } = process.env;

    const findUser = await userModel.findById(body._id);

    console.log("findUser", findUser);

    if (!findUser) {
      return Response.json({
        message: "Users not found!",
        status: 404,
        success: false,
      });
    }

    const findOTP = await otpModel.findOne({ user_id: findUser._id });

    console.log("findOTP", findOTP);

    if (findOTP.otp != body.otp) {
      return Response.json({
        message: "Otp is incorrect",
        status: 404,
        success: false,
      });
    }

    const jwt_payload = { _id: findUser._id };
    const generateToken =
      JWT_SECRET && jwt.sign(jwt_payload, JWT_SECRET, { expiresIn: "7d" });

    (await cookies()).set(
      process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY || "",
      generateToken || ""
    );

    // body save on database

    // send OTP on email or SMS

    return Response.json({
      data: findUser,
      message: "User is Successfully Logged",
      success: true,
    });
  } catch (error) {
    console.log("error", error);
  }
}
