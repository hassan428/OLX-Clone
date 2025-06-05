import { userModel } from "@/lib/schema/profileSchema";
import { otpModel } from "@/lib/schema/otpSchema";
import bcrypt from "bcrypt";
import { generateOtp } from "@/utils";
import { sendOtpEmail } from "@/services/email/sendOtpEmail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { GEN_SALT } = process.env;
    const { email, phoneNumber, name, password } = body;

    // Step 1: Prepare dynamic query
    const queryConditions = [];
    if (email) queryConditions.push({ email });
    if (phoneNumber) queryConditions.push({ phoneNumber });
    if (name) queryConditions.push({ name });

    if (queryConditions.length > 0) {
      const matchedUsers = await userModel.find({ $or: queryConditions });

      const unverifiedIds = matchedUsers
        .filter((user) => user.isVerified === false)
        .map((user) => user._id);

      unverifiedIds.length > 0 &&
        (await userModel.deleteMany({ _id: { $in: unverifiedIds } }));

      const verifiedUser = matchedUsers.find(
        (user) => user.isVerified === true
      );

      verifiedUser && (await userModel.create(body));
    }

    // Step 2: Hash password if provided
    if (GEN_SALT && password) {
      const salt = await bcrypt.genSalt(+GEN_SALT);
      const hash = await bcrypt.hash(password, salt);
      body.password = hash;
    }

    // Step 3: Create new user
    const newUser = await userModel.create(body);

    if (newUser.password) {
      const { _id, email, name } = newUser;
      const otp = generateOtp();
      console.log("otp", otp);
      await otpModel.create({ otp, user_id: _id });
      await sendOtpEmail({ otp, email, name });
    }

    // Step 5: Return response
    return Response.json({
      data: newUser,
      success: true,
      message: "User created successfully",
    });
  } catch (error: any) {
    console.log("error", error);

    return Response.json({
      success: false,
      message: error?.message || "Internal Server Error",
    });
  }
}
