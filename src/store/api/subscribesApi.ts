import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IGetSubscribersResponce, ISubscriber } from "./types";
import { jsonPlaceholderUrl } from "../../utils/constants";

export const subscriberApi = createApi({
  reducerPath: "subscriberApi",
  baseQuery: fetchBaseQuery({ baseUrl: jsonPlaceholderUrl }),
  endpoints: (builder) => ({
    getSubscibes: builder.query<IGetSubscribersResponce, null>({
      query: () => `/users`,
    }),
    getSubsciberById: builder.query<ISubscriber, null>({
      query: (subsciber_id) => `/users/${subsciber_id}`,
    }),
  }),
});

export const {
  useGetSubscibesQuery,
  useGetSubsciberByIdQuery,
  useLazyGetSubsciberByIdQuery,
  useLazyGetSubscibesQuery,
} = subscriberApi;
