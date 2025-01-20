import { userModel } from "@/lib/schema/profileSchema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("body", body);

    const { JWT_SECRET } = process.env;

    const findUser = body; // await userModel.findById(body._id);
    // if (!findUser)
    //   return Response.json({ status: 404, message: "User not Found!" });

    const comparePassword = await bcrypt.compare(
      body.password,
      "$2b$10$Tix3wJG.3sVHvjMjKks/MeQjsGd4zbrEx1tsfEv3YB8PWceGfVh8i"
    );
    // const comparePassword = bcrypt.compare(body.password, findUser.password);
    console.log("comparePassword", comparePassword);

    if (!comparePassword)
      return Response.json({ status: 404, message: "Password is incorrect!" });

    const jwt_payload = { _id: findUser._id };

    const generateToken =
      JWT_SECRET && jwt.sign(jwt_payload, JWT_SECRET, { expiresIn: "7d" });

    (await cookies()).set(
      process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY || "",
      generateToken || ""
    );

    return Response.json({
      data: findUser,
      message: "Request is Successfull",
    });
  } catch (error) {
    console.log("error", error);
  }
}
