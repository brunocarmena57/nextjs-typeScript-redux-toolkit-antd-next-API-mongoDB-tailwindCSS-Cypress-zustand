type ITeacher = {
    _id: number | string
    nationalId: string
    title: string
    firstname: string
    surname: string
    dob: string
    teacher_number: string
    salary: number
}

type Student = {
    _id: number | string
    nationalId: string
    firstName: string
    surname: string
    student_number?: string
    dob: string
}