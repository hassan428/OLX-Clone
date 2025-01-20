import { Schema, model } from "mongoose";

const codeSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: "userProfiles",
    },
    code: {
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

export const codeModel = model("userCodes", codeSchema);
