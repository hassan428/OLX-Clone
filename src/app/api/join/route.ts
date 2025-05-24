import { userModel } from "@/lib/schema/profileSchema";
import bcrypt from "bcrypt";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("body", body);
    const { GEN_SALT } = process.env;

    if (GEN_SALT && body.password && body._id) {
      const salt = await bcrypt.genSalt(+GEN_SALT);
      const hash = await bcrypt.hash(body.password, salt);
      body.password = hash;

      const findUser = await userModel.findById(body._id);
      if (!findUser)
        return Response.json({ status: 404, message: "User not Found!" });
      const updateUser = await findUser.updateOne(body);
      console.log("updateUser", updateUser);
      return Response.json({
        data: updateUser,
        message: "Request is Successfull",
      });
    }

    // body save on database
    const createUser = await userModel.create(body);
    console.log("createUser", createUser);

    // send OTP on email or SMS

    return Response.json({
      data: createUser,
      message: "Request is Successfull",
    });
  } catch (error) {
  return Response.json({
     success: false,
      message: error.message,
    });
    console.log("error", error);
  }
}
