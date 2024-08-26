import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  IGetUserResponse,
  ILoginUserPayload,
  ILoginUserResponce,
  IRegisterUserPayload,
  IRegisterUserResponce,
} from "./types";
import { baseUrl } from "../../utils/baseUrl";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getUser: builder.query<IGetUserResponse, string>({
      query: (user_id) => `/user?user_id=${user_id}`,
    }),
    loginUser: builder.mutation<ILoginUserResponce, ILoginUserPayload>({
      query: (loginData) => ({
        url: "/login",
        method: "POST",
        body: loginData,
      }),
    }),
    regData: builder.mutation<IRegisterUserResponce, IRegisterUserPayload>({
      query: (regData) => ({
        url: "/registration",
        method: "POST",
        body: regData,
      }),
    }),
  }),
});

export const { useGetUserQuery, useLoginUserMutation, useRegDataMutation } =
  authApi;
