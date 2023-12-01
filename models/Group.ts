import mongoose, { Schema } from "mongoose";

const GroupSchema = new Schema(
  {
    groupName: {
      type: String,
      required: true,
      trim: true,
    },

    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },

  { timestamps: true }
);

export default mongoose.models.Group ||
  mongoose.model("Group", GroupSchema, "groups");
