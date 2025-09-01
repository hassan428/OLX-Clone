import { userModel } from "@/lib/schema/profileSchema";
import { createAuthToken, setAuthCookie } from "@/utils/auth";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("body", body);

    // ✅ User find by email or phoneNumber
    let query: any = { isVerified: true };

    if (body.email) {
      query.email = body.email;
    } else if (body.phoneNumber) {
      query.phoneNumber = body.phoneNumber;
    }

    const findUser = await userModel.findOne(query);
    console.log("findUser", findUser);

    if (!findUser) {
      return Response.json({
        success: false,
        message: body.email ? "Email not found" : "Phone number not found",
        status: 404,
      });
    }

    // ✅ Password compare
    const comparePassword = await bcrypt.compare(
      body.password,
      findUser.password
    );
    console.log("comparePassword", comparePassword);

    if (!comparePassword) {
      return Response.json({
        status: 401,
        message: "Password is incorrect!",
        success: false,
      });
    }

    // ✅ Generate JWT (Token)
    const generateToken = await createAuthToken(findUser._id.toString());

    // ✅ Set Cookies
    await setAuthCookie(generateToken);

    return Response.json({
      data: findUser,
      message: "Login successful",
      success: true,
    });
  } catch (error) {
    console.error("error", error);
    return Response.json({
      status: 500,
      message: "Internal Server Error",
      success: false,
    });
  }
}
