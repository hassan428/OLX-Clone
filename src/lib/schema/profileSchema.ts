import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    gender: String,
    avatarUrl: String,
    aboutMe: String,
    birthDate: Date,
    name: {
      type: String,
      required: [true, "name is required!"],
      unique: [true, "name already exist!"],
      lowercase: true,
    },
    phoneNumber: {
      type: String,
      unique: [true, "phone number already exist!"],
      trim: true,
    },
    email: {
      type: String,
      unique: [true, "email already exist!"],
      trim: true,
      lowercase: true,
    },
    password: String,
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    login_count: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export const userModel =
  models.userProfiles || model("userProfiles", userSchema);
