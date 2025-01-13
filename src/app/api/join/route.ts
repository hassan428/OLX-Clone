import { user_model } from "@/models_schema/user_profile";
import bcrypt from "bcrypt";
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { GEN_SALT } = process.env;

    if (GEN_SALT) {
      const salt = await bcrypt.genSalt(+GEN_SALT);
      const hash = await bcrypt.hash(body.password, salt);
      body.password = hash;
    }

    // body save on database
    const createUser = await user_model.create(body);

    console.log("createUser", createUser);

    // send OTP on email or SMS

    return Response.json({ data: body, message: "Request is Successfull " });
  } catch (error) {
    console.log("error", error);
  }
}
//hash $2b$10$SDY4G0r20bkGsXH7u3Qlr.p4abfNTpxxw/WHSITSFuPi4fpRAD0Ve
//hash $2b$10$2MkY62CGPyT215iOGzfXee0/fWzVARMGSyM5bqQlgih75KU39c7Om
