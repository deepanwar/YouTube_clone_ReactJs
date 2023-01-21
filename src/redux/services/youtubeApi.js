import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-v31.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "1789510910msh041aa738115b761p165e07jsn7be783d25454"
      );
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

export const { useGetNewVideosQuery } = youtubeApi;
