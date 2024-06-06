import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
  {
    nationalId: String,
    firstname: String,
    surname: String,
    dob: String,
    student_number: String,
  },
  {
    timestamps: true,
  }
);

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

export default Student;
