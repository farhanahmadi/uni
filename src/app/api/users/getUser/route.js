import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
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

export async function GET() {
  const cookieStore = await cookies(); // 👈 must await
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.json(
      { message: "لطفا ابتدا وارد شوید" },
      { status: 401 }
    );
  }

  try {
    await dbConnect();

    const users = await getAllUsers();
    const user = users.find((u) => u.accessToken === accessToken);

    if (!user) {
      return NextResponse.json(
        { message: "کاربر یافت نشد یا توکن نامعتبر است" },
        { status: 403 }
      );
    }

    const response = NextResponse.json({ user });

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
  } catch (err) {
    console.error("Error in GET /api/users/getUser:", err);
    return NextResponse.json(
      { message: "خطای داخلی سرور", error: err.message || err },
      { status: 500 }
    );
  }
}

// get all users list
export async function getAllUsers() {
  const usersList = await Users.find({});
  return usersList;
}
