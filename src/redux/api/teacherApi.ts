import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../apiConfig";

export const teacherApi = createApi({
  reducerPath: "teacher",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl + "/api/",
  }),
  tagTypes: ["Teachers"],
  endpoints: (builder) => ({
    getTeachers: builder.query({
      query: () => "teacher",
      providesTags: ["Teachers"],
    }),
    createTeacher: builder.mutation({
      query: (data) => ({
        url: "teacher",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Teachers"],
    }),
    updateTeacher: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `teacher/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Teachers"],
    }),
    deleteTeacher: builder.mutation({
      query: (id) => ({
        url: `teacher/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Teachers"],
    }),
  }),
});

export const {
  useGetTeachersQuery,
  useCreateTeacherMutation,
  useUpdateTeacherMutation,
  useDeleteTeacherMutation,
} = teacherApi;
