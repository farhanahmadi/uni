import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/server/utils/dbConnect";
import Users from "@/server/models/user";
import { cookies } from "next/headers";

export async function POST(NextRequest) {
  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.json({ message: "دسترسی غیرمجاز" }, { status: 401 });
  }

  await dbConnect();
  const user = await NextRequest.json();

  try {
    const updatedUser = await Users.updateOne(
      { accessToken: accessToken },
      { $push: { purchased: user } }
    );

    if (updatedUser.matchedCount === 0) {
      return NextResponse.json({ message: "کاربر یافت نشد" }, { status: 404 });
    }

    return NextResponse.json(
      { message: `${user.name} با موفقیت به سبد خرید افزرده شد` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}