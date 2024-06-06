import mongoose, { Schema } from "mongoose";

const teacherSchema = new Schema(
  {
    nationalId: String,
    title: String,
    firstname: String,
    surname: String,
    dob: String,
    teacher_number: String,
    salary: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Teacher =
  mongoose.models.Teacher || mongoose.model("Teacher", teacherSchema);

export default Teacher;
