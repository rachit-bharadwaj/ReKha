import { NextRequest, NextResponse } from "next/server";

// import models
import User from "@/models/User";

// import utils
import connectDB from "@/utils/mongoose";

// import bcrypt
import * as bcrypt from "bcryptjs";

// import jsonwebtoken
import * as jwt from "jsonwebtoken";

// connect to DB
connectDB();

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // find user from DB
    const user = await User.findOne({ email });

    // if user not found
    if (!user) {
      return NextResponse.json({ status: 404, error: "User not found" });
    }

    // compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ status: 401, error: "Invalid credentials" });
    }

    //   create token data
    const tokenData = {
      id: user._id,
      email: user.email,
      userName: user.userName,
      name: user.name,
    };

    //   create token
    const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    const response = NextResponse.json({
      status: 200,
      message: "Login successful",
      user: tokenData,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      secure: true,
    });

    return response;
  } catch (error: any) {
    if (error.message === "Bad request") {
      return NextResponse.json({ status: 400, message: "Action not allowed" });
    } else if (error.message === "Invalid credentials") {
      return NextResponse.json({ status: 500, message: "Invalid credentials" });
    } else {
      return NextResponse.json({ status: 500, message: error.message });
    }
  }
};
