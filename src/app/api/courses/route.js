import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import courses from "@/server/models/courses";
import dbConnect from "@/server/utils/dbConnect";

export const POST = async (req) => {
  const formData = await req.formData();
  console.log(formData);

  // Get the file from the form data
  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  // Validate file type (optional)
  const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/svg"];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json(
      { error: "Invalid file type. Only JPEG, PNG, and GIF are allowed." },
      { status: 400 }
    );
  }

  // Convert file to buffer
  const buffer = Buffer.from(await file.arrayBuffer());

  // Generate a unique filename
  const filename = `${Date.now()}_${file.name.replaceAll(" ", "_")}`;
  const filePath = path.join(process.cwd(), "/assets/img/", filename);

  try {
    // Save the file to the specified path
    await writeFile(filePath, buffer);
    await courses.create({
      id: Math.floor(new Date().valueOf() * Math.random()),
      img: "public/assets/img" + filename,
      name: formData.get("name"),
      timeLength: formData.get("timeLength"),
      status: formData.get("status"),
      price: formData.get("price"),
      discount: formData.get("discount"),
    });
    return NextResponse.json(
      { message: "course uploaded successfully", filename },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error occurred while saving the file:", error);
    return NextResponse.json(
      { error: "Failed to save the file" },
      { status: 500 }
    );
  }
};

export async function GET() {
  try {
    await dbConnect();
    const coursesList = await getAllCourses();
    return NextResponse.json({ coursesList });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// get all courses list
export async function getAllCourses() {
  const coursesList = await courses.find({});
  return coursesList;
}
