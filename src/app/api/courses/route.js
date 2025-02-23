import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export const POST = async (req) => {
  const formData = await req.formData();
  console.log(formData);

  // Get the file from the form data
  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  // Validate file type (optional)
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
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
  const filePath = path.join(process.cwd(), "public/assets/img", filename);

  try {
    // Save the file to the specified path
    await writeFile(filePath, buffer);
    return NextResponse.json(
      { message: "File uploaded successfully", filename },
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
