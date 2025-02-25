import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/server/utils/dbConnect";
import Users from "@/server/models/user";
import { cookies } from "next/headers";

export async function PUT(NextRequest) {
  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.json({ message: "دسترسی غیرمجاز" }, { status: 401 });
  }

  await dbConnect();
  const user = await NextRequest.json();

  try {
    const updatedUser = await Users.updateOne(
      { accessToken: accessToken },
      { $pull: { purchased: { id: user.id } } }
    );

    if (updatedUser.matchedCount === 0) {
      return NextResponse.json({ message: "کاربر یافت نشد" }, { status: 404 });
    }

    return NextResponse.json(
      { message: `${user?.name} با موفقیت حذف شد` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
