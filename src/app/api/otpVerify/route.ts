import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("body", body);

    // find user from body.email , password

    // if(find_user) {
    // return Response.json({ message: "Users not found!", status: 404 });
    // }

    const customOTP = 789456; // find otp from user

    if (customOTP != body.otp) {
      return Response.json({ message: "Otp is incorrect", status: 404 });
    }

    // body save on database

    // send OTP on email or SMS

    return Response.json({ data: body, message: "Request is Successfull " });
  } catch (error) {
    console.log("error", error);
  }
}
