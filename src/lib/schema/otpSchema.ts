import { Schema, model, models } from "mongoose";

const otpSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: "userProfiles",
    },
    otp: {
      type: String,
      required: true,
    },
    typeWrongCode: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export const otpModel = models.otp || model("otp", otpSchema);
