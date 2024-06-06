import connectMongoDB from "@/app/api/config/mongoConnect";
import Teacher from "@/app/api/model/teacherModel";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface Params {
  id: string;
}

interface Context {
  params: Params;
}

export async function PATCH(req: NextRequest, context: Context) {
  const { id } = context.params;

  try {
    const updates = await req.json();
    await connectMongoDB();

    const updatedTeacher = await Teacher.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedTeacher) {
      return NextResponse.json({ status: 404, message: "Teacher not found" }, { status: 404 });
    }

    return NextResponse.json({ status: "success", message: "Teacher updated", data: updatedTeacher }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "failed", message: "Error updating teacher" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, context: Context) {
  const { id } = context.params;

  try {
    await connectMongoDB();

    const deletedTeacher = await Teacher.findByIdAndDelete(id);

    if (!deletedTeacher) {
      return NextResponse.json({ status: 404, message: "Teacher not found" }, { status: 404 });
    }

    return NextResponse.json({ status: "success", message: "Teacher deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "failed", message: "Error deleting teacher" }, { status: 500 });
  }
}
