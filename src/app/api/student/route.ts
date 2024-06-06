import connectMongoDB from "../config/mongoConnect";
import { NextResponse } from "next/server";
import Student from "../model/studentModel";

export async function GET() {
  await connectMongoDB();
  const students = await Student.find();
  return NextResponse.json({ data: students });
}

export async function POST(req: Request) {
  try {
    const newStudent = await req.json();
    await connectMongoDB();

    const missingFields = [];

    if (!newStudent.nationalId) missingFields.push("nationalId");
    if (!newStudent.firstname) missingFields.push("firstname");
    if (!newStudent.surname) missingFields.push("surname");
    if (!newStudent.dob) missingFields.push("dob");
    if (!newStudent.student_number) missingFields.push("student_number");

    if (missingFields.length > 0) {
      let error_response = {
        status: 400,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      };
      return new NextResponse(JSON.stringify(error_response), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    let json_response = {
      status: "success",
      message: "Student Created",
      data: { ...newStudent },
    };

    await Student.create(newStudent);
    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
    });
  } catch (error) {
    console.log(error);

    let error_response = {
      status: "failed",
      message: "Error creating student profile",
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 409,
    });
  }
}
