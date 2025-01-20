import { Schema, model } from "mongoose";

const cardSchema = new Schema(
  {
    price: String,
    title: String,
    description: String,
    location: String,
    time: String,
    src: [String],
    // team_name: {
    //   type: String,
    //   required: true,
    // },
    // team_avatar_url: String,
    // members: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "userProfiles",
    //   },
    //   { required: true },
    // ],
    // teamType: {
    //   type: String,
    //   enum: ["Private", "Public", "Secret"],
    //   default: "Private",
    // },
  },
  {
    timestamps: true,
  }
);

export const Team = model("Team", cardSchema);
