import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/server/utils/dbConnect";
import Users from "@/server/models/user";
// import { OtpCreator, OtpExpiresIn } from "@/utils/OtpHandler";
import { signJWT } from "@/utils/jwt";

export const sessions = {};

export function createSession(phoneNumber, name) {
  const sessionId = String(Object.keys(sessions).length + 1);

  const session = { sessionId, phoneNumber, valid: true, name };

  sessions[sessionId] = session;

  return session;
}

export async function GET() {
  try {
    await dbConnect();
    const usersList = await getAllUsers();
    return NextResponse.json({ usersList });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(NextRequest) {
  await dbConnect();
  const user = await NextRequest.json();
  const session = createSession(user.phoneNumber, "uniUser");

  const OtpCreator = Math.floor(Math.random() * 90000) + 10000;
  const OtpExpiresIn = new Date(Date.now() + 2 * 60 * 1000);

  try {
    // create new user
    await Users.create({
      phoneNumber: user.phoneNumber,
      role: "User",
      otp: {
        code: OtpCreator,
        expiresIn: OtpExpiresIn,
      },
      accessToken: signJWT(
        { phoneNumber: user.phoneNumber, sessionId: session.sessionId },
        "5s"
      ),
      refreshToken: signJWT({ sessionId: session.sessionId }, "1y"),
    });
    const usersList = await getAllUsers();
    return NextResponse.json(
      { message: "کد تایید با موفقیت ارسال شد", usersList },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// get all users list
export async function getAllUsers() {
  const usersList = await Users.find({});
  return usersList;
}
