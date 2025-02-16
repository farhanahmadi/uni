import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import dbConnect from "@/server/utils/dbConnect";
import Users from "@/server/models/user";
import { OtpCreator, OtpExpiresIn } from "@/utils/OtpHandler";
import { signJWT } from "@/utils/jwt";

export async function GET() {
  const accessToken = cookies().get("accessToken")?.value;
  if (!accessToken)
    return NextResponse.json(
      { message: "لطفا ابتدا وارد شوید" },
      { status: 401 }
    );
  try {
    await dbConnect();
    const usersList = await getAllUsers();
    const findUser = usersList.find((user) => user.accessToken === accessToken);
    return NextResponse.json({ findUser });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// get all users list
export async function getAllUsers() {
  const usersList = await Users.find({});
  return usersList;
}
