import { deleteAuthCookie } from "@/utils/auth";

export async function POST() {
  try {
    // ✅ deleete Cookie
    await deleteAuthCookie();

    return Response.json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.error("Logout error", error);
    return Response.json({
      success: false,
      message: "Something went wrong",
      status: 500,
    });
  }
}
