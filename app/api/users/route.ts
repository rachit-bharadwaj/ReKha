import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const {userName} = reqBody;

    let users = [];

    // check if it is a userName
    const isUserName = await User.findOne({ userName });
    if (isUserName)
      return NextResponse.json({
        status: 200,
        message: "User found with that userName",
        isUserName,
      });
    else {
      users.push(User.find({ userName }));
    }

    return NextResponse.json({ status: 200, message: "Users found", users });
  } catch (error: any) {
    if (error.message === "Bad request") {
      return NextResponse.json({ status: 400, error: error.message });
    } else {
      return NextResponse.json({ status: 500, error: error.message });
    }
  }
};
