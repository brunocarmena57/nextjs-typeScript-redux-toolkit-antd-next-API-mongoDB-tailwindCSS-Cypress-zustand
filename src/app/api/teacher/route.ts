import connectMongoDB from "@/app/api/config/mongoConnect";
import Teacher from "@/app/api/model/teacherModel";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET() {
  await connectMongoDB();
  const teachers = await Teacher.find();
  return NextResponse.json({ data: teachers });
}

export async function POST(req: NextRequest) {
  try {
    const newTeacher = await req.json();
    await connectMongoDB();

    const missingFields = [];
    if (!newTeacher.nationalId) missingFields.push("nationalId");
    if (!newTeacher.title) missingFields.push("title");
    if (!newTeacher.firstname) missingFields.push("firstname");
    if (!newTeacher.surname) missingFields.push("surname");
    if (!newTeacher.dob) missingFields.push("dob");
    if (!newTeacher.teacher_number) missingFields.push("teacher_number");

    if (missingFields.length > 0) {
      return NextResponse.json({ status: 400, message: `Missing required fields: ${missingFields.join(", ")}` }, { status: 400 });
    }

    await Teacher.create(newTeacher);
    return NextResponse.json({ status: "success", message: "Teacher Created", data: newTeacher }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "failed", message: "Error creating teacher" }, { status: 409 });
  }
}
