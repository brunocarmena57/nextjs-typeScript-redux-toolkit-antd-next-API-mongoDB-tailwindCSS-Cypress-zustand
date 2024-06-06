/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../apiConfig";

export const studentApi = createApi({
  reducerPath: "student",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl + "/api/",
  }),
  tagTypes: ["Students"],
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "student",
      providesTags: ["Students"],
    }),
    createStudent: builder.mutation({
      query: ({ ...data }) => ({
        url: "student",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Students"],
    }),
  }),
});

export const { useGetStudentsQuery, useCreateStudentMutation } = studentApi;
