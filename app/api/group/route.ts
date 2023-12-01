import { NextRequest, NextResponse } from "next/server";
import Group from "@/models/Group";

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();

    const { groupName, members } = reqBody;

    // create group
    const newGroup = new Group({
      groupName,
      members,
    });

    // save group
    const savedGroup = await newGroup.save();

    return NextResponse.json({
      status: 201,
      message: "Group created successfully",
      group: savedGroup,
    });
  } catch (error: any) {
    if (error.message === "Bad request") {
      return NextResponse.json({ status: 400, error: error.message });
    } else {
      return NextResponse.json({ status: 500, error: error.message });
    }
  }
};
