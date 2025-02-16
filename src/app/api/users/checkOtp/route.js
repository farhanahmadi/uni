import { NextResponse } from "next/server";
import dbConnect from "@/server/utils/dbConnect";
import Users from "@/server/models/user";

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

export async function POST(request) {
  await dbConnect();
  const body = await request.json();

  try {
    const usersList = await getAllUsers();
    const user = usersList.find((item) => item.otp.code === Number(body.otp));

    if (user) {
      // Create a response object
      const response = NextResponse.json(
        { message: "با موفقیت وارد شدید" },
        { status: 200 }
      );

      // Set cookies using NextResponse
      response.cookies.set({
        name: "accessToken",
        value: user.accessToken,
        ...cookieOptions,
      });
      response.cookies.set({
        name: "refreshToken",
        value: user.refreshToken,
        ...cookieOptions,
      });

      return response;
    } else {
      return NextResponse.json(
        { message: "رمز وارد شده صحیح نمیباشد" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "مشکلی در ارتباط رخ داد لطفا دوباره تلاش کنید" },
      { status: 500 }
    );
  }
}

// Get all users list
export async function getAllUsers() {
  const usersList = await Users.find({});
  return usersList;
}
