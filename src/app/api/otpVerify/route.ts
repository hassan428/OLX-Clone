import { userModel } from "@/lib/schema/profileSchema";
import { otpModel } from "@/lib/schema/otpSchema";
import { createAuthToken, setAuthCookie } from "@/utils/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
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

    // ✅ User verified
    findUser.isVerified = true;
    await findUser.save();

    // ✅ OTP delete
    await otpModel.deleteOne({ _id: findOTP._id });

    // ✅ Generate JWT (Token)
    const generateToken = await createAuthToken(findUser._id.toString());

    // ✅ Set Cookies
    await setAuthCookie(generateToken);

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
