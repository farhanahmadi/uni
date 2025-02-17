import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import dbConnect from "@/server/utils/dbConnect";
import Users from "@/server/models/user";
import { OtpCreator, OtpExpiresIn } from "@/utils/OtpHandler";
import { signJWT } from "@/utils/jwt";

const cookieOptions = {
  maxAge: 1000 * 60 * 60 * 6, // 6 hours
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "development" ? false : true, // false for localhost
  domain:
    process.env.NODE_ENV === "development"
      ? "localhost"
      : "your-production-domain.com", // Replace with your production domain
  path: "/",
};

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

    const response = NextResponse.json({ findUser });

    // Set cookies using NextResponse
    response.cookies.set({
      name: "accessToken",
      value: findUser.accessToken,
      ...cookieOptions,
    });
    response.cookies.set({
      name: "refreshToken",
      value: findUser.refreshToken,
      ...cookieOptions,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// get all users list
export async function getAllUsers() {
  const usersList = await Users.find({});
  return usersList;
}
