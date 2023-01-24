import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNewVideos: builder.query({
      query: (term = "New") =>
        `search?part=snippet&regionCode=IN&maxResults=50&q=${term}`,
    }),
  }),
});

console.log(import.meta.env.VITE_API, import.meta.env.VITE_API_KEY);

export const { useGetNewVideosQuery } = youtubeApi;
