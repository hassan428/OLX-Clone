import axios from "axios";
import { CloudinaryUploadOptions } from "@/interfaces";

export const uploadToCloudinary = async ({
  file,
  folder,
  ...options
}: CloudinaryUploadOptions): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append("file", file); // ✅ File ko explicitly add karo

    // Add all other options dynamically
    Object.entries({
      upload_preset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!,
      folder: folder || "lox_uploads", // default folder
      ...options,
    }).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, String(value)); // ✅ Force string conversion for safety
      }
    });

    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData
    );

    return res.data.secure_url;
  } catch (err: any) {
    throw new Error("Cloudinary Upload Failed: " + err.message);
  }
};
