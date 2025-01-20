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

    if (!token) {
      console.log("Token not found in cookies.");
      return commonResponse;
    }

    // Verify the token
    const verifyToken = jwt.verify(token, JWT_SECRET || "");
    console.log("Verified Token:", verifyToken);

    if (!verifyToken) return commonResponse;

    // Simulate user fetch from DB
    const findUser = { name: "hassan", gender: "Male" }; // Replace this with actual DB query if needed
    if (!findUser) return commonResponse;

    // Generate new token
    const jwt_payload = { _id: "findUser._id" }; // Ensure _id exists in token
    const generateToken = jwt.sign(jwt_payload, JWT_SECRET || "", {
      expiresIn: "7d",
    });
    console.log("Generated Token:", generateToken);

    // Set new token in cookies
    (await cookies()).set(
      process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY || "",
      generateToken
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

// import { userModel } from "@/lib/schema/profileSchema";
// import jwt from "jsonwebtoken";
// import { cookies } from "next/headers";

// export async function GET(req: Request) {
//   const commonResponse = Response.json({
//     status: 404,
//     message: "User not found!",
//     success: false,
//   });
//   try {
//     const { JWT_SECRET } = process.env;
//     req.headers.getSetCookie();
//     const getToken = await (
//       await cookies()
//     ).get(process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY || "");
//     console.log("getToken 17", getToken);

//     const getlocaation = await (
//       await cookies()
//     ).get(process.env.NEXT_PUBLIC_LOCATION_KEY || "");
//     console.log("getlocaation 17", getlocaation);
//     console.log("req.headers.getSetCookie()", req.headers.getSetCookie());

//     if (!getToken) return commonResponse;

//     const verifyToken = jwt.verify(getToken.value, JWT_SECRET || "");
//     console.log("verifyToken", verifyToken);

//     if (!verifyToken) return commonResponse;

//     // const decodeToken = jwt.decode(verifyToken);

//     const findUser = verifyToken; // await userModel.findById(verifyToken._id);
//     if (!findUser) return commonResponse;

//     const jwt_payload = { _id: "findUser._id" };

//     const generateToken = jwt.sign(jwt_payload, JWT_SECRET || "", {
//       expiresIn: "7d",
//     });
//     console.log("generateToken", generateToken);

//     (await cookies()).set(
//       process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY || "",
//       generateToken || ""
//     );

//     return Response.json({
//       data: findUser,
//       message: "Request is Successfull",
//       success: true,
//     });
//   } catch (error) {
//     console.log("error", error);
//   }
// }
