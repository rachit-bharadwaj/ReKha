"use server";

import User from "@/models/User";
import connectDB from "@/utils/mongoose";
import { getCookieData } from "./auth.action";

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

export const getUserDataFromCookie = async () => {
  connectDB();
  const userID = await getCookieData();
  const userData = await User.findById(userID);

  return userData;
};
