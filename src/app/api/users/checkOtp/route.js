import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/server/utils/dbConnect";
import Users from "@/server/models/user";
import { setCookie } from "cookies-next";

const cookieOptions = {
  maxAge: 1000 * 60 * 60 * 6,
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "development" ? false : true,
  domain: process.env.NODE_ENV === "development" ? "localhost" : "localhost",
  path: "/",
};

export async function POST(NextRequest) {
  await dbConnect();
  const body = await NextRequest.json();
  try {
    const usersList = await getAllUsers();
    const user = usersList.find((item) => item.otp.code === Number(body.otp));

    if (user) {
      setCookie("accessToken", user.accessToken, cookieOptions);
      setCookie("refreshToken", user.refreshToken, cookieOptions);

      return NextResponse.json(
        { message: "با موفقیت وارد شدید" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "رمز وارد شده صحیح نمیباشد" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "مشکلی در ارتباط رخ داد لطفا دوباره تلاش کنید" },
      { status: 400 }
    );
  }
}

// get all users list
export async function getAllUsers() {
  const usersList = await Users.find({});
  return usersList;
}
