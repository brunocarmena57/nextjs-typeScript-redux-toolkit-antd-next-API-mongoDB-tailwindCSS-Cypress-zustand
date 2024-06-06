import create from 'zustand';

interface Student {
  id: string;
  firstname: string;
  surname: string;
  student_number: string;
  nationalId: string;
  dob: string;
}

interface StudentStore {
  students: Student[];
  setStudents: (students: Student[]) => void;
  counter: number;
  incrementCounter: (value: number) => void;
  resetCounter: () => void;
}

export const useStudentStore = create<StudentStore>((set) => ({
  students: [],
  setStudents: (students) => set({ students, counter: students.length }),
  counter: 0,
  incrementCounter: (value: number) => set((state) => ({ counter: state.counter + value })),
  resetCounter: () => set({ counter: 0 }),
}));
