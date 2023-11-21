import { NextRequest, NextResponse } from "next/server";

// import models
import User from "@/models/User";

// import utils
import connectDB from "@/utils/mongoose";

// import bcrypt
import * as bcrypt from "bcryptjs";

// connect to DB
connectDB();

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { name, userName, email, password } = reqBody;

    // check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 403 }
      );
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const newUser = new User({
      name,
      userName,
      email,
      password: hashedPassword,
    });

    // save user
    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json({
      status: 201,
      message: "User created successfully",
    });
  } catch (error: any) {
    if (error.message === "Bad request") {
      return NextResponse.json({ status: 400, error: error.message });
    } else {
      return NextResponse.json({ status: 500, error: error.message });
    }
  }
};
