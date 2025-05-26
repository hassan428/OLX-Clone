import { userModel } from "@/lib/schema/profileSchema";
import bcrypt from "bcrypt";

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

    let existingUser = null;

    if (queryConditions.length > 0) {
      existingUser = await userModel.findOne({ $or: queryConditions });
    }

    // Step 2: Handle existing verified user (block creation)
    if(existingUser){
      if (existingUser.isVerified === true) {
        return Response.json({
          success: false,
          message: "User already exists and is verified.",
        });
      }
      // Step 3: If not verified, delete the old unverified user
      if (existingUser.isVerified === false) {
        await userModel.deleteOne({ _id: existingUser._id });
      }
    }

    // Step 4: Hash the password if exists
    if (GEN_SALT && password) {
      const salt = await bcrypt.genSalt(+GEN_SALT);
      const hash = await bcrypt.hash(password, salt);
      body.password = hash;
    }

    // Step 5: Create the new user
    const newUser = await userModel.create(body);

    // Step 6: (TODO) Send OTP here

    // Step 7: Return success response
    return Response.json({
      data: newUser,
      success: true,
      message: "User created successfully",
    });

  } catch (error: any) {
    console.log("error", error);

    // Handle MongoDB duplicate key error
    if (error.code === 11000) {
      const duplicateField = Object.keys(error.keyPattern)[0];
      return Response.json({
        success: false,
        message: `${duplicateField} already exists!`,
      });
    }

    return Response.json({
      success: false,
      message: error?.message || "Internal Server Error",
    });
  }
}



// import { userModel } from "@/lib/schema/profileSchema";
// import bcrypt from "bcrypt";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { GEN_SALT } = process.env;
//     const { email, phoneNumber, name, password } = body;

//     // Find existing user by unique fields
//     const queryConditions = [];

//     if (email) queryConditions.push({ email });
//     if (phoneNumber) queryConditions.push({ phoneNumber });
//     if (name) queryConditions.push({ name });

//     let existingUser = null;
//     console.log("queryConditions", queryConditions);

//     if (queryConditions.length > 0) {
//       existingUser = await userModel.findOne({ $or: queryConditions });
//     }

//     console.log("existingUser", existingUser);

//     if (existingUser) {
//       if (existingUser.isVerified === true) {
//         const newUser = await userModel.create(body);
//         console.log("newUser29", newUser);
//       } else {
//         // If not verified, delete and create new user
//         await userModel.deleteOne({ _id: existingUser._id });
//       }
//     }

//     // Hash password if exists
//     if (GEN_SALT && password) {
//       const salt = await bcrypt.genSalt(+GEN_SALT);
//       const hash = await bcrypt.hash(password, salt);
//       body.password = hash;
//     }

//     // Create user
//     const newUser = await userModel.create(body);
//     console.log("newUser", newUser);

//     // TODO: Send OTP via email/SMS here

//     return Response.json({
//       data: newUser,
//       success: true,
//       message: "User created successfully",
//     });

//   } catch (error) {
//     console.log("error", error);
//     return Response.json({
//       success: false,
//       message: error?.message || "Internal Server Error",
//     });
//   }
// }
