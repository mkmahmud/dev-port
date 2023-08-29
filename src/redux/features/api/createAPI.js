import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/p" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (email) => `/user/user/${email}`,
    }),
    getprojects: builder.query({
      query: (email) => `/project/all-project/${email}`,
    }),
    getSingelProject: builder.query({
      query: (id) => `/project/project/${id}`,
    }),
    submitMessage: builder.mutation({
      query: (messageData) => ({
        url: "/message/create-message",
        method: "POST",
        body: messageData,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetprojectsQuery,
  useGetSingelProjectQuery,
  useSubmitMessageMutation
} = api;
