import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import {
  ICreatePostPayload,
  ICreatePostResponce,
  IDeletePostResponce,
  IGetAllPostsResponce,
  IGetPostByIdResponce,
  IUpdatePostPayload,
  IUpdatePostResponce,
} from "./types";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPostById: builder.query<IGetPostByIdResponce, string>({
      query: (post_id) => `/post?post_id=${post_id}`,
    }),
    getAllPosts: builder.query<IGetAllPostsResponce, null>({
      query: () => "/post",
    }),
    createPost: builder.mutation<ICreatePostResponce, ICreatePostPayload>({
      query: (post_data) => ({
        url: "/post",
        method: "POST",
        body: post_data,
      }),
    }),
    updatePost: builder.mutation<IUpdatePostResponce, IUpdatePostPayload>({
      query: (update_data) => ({
        url: "/post",
        method: "PUT",
        body: update_data,
      }),
    }),
    deletePost: builder.mutation<IDeletePostResponce, string>({
      query: (post_id) => ({
        url: `/post?post_id=${post_id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useLazyGetPostByIdQuery,
  useLazyGetAllPostsQuery,
  useUpdatePostMutation,
} = postApi;
