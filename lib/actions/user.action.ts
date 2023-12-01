"use server";

import User from "@/models/User";
import connectDB from "@/utils/mongoose";

export const searchUser = async ({ query }: any) => {
  connectDB();

  const users = await User.find({
    $or: [
      { userName: { $regex: new RegExp(query, "i") } },
      { name: { $regex: new RegExp(query, "i") } },
    ],
  });

  return users;
};
