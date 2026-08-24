import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IUData, IUser, IPData, 
    IPost, ILog } from "../models/Interfaces";
import type { LType } from "../validation/Schema";
const URL = "https://dummyjson.com";

export const APIData = createApi({
    reducerPath: "APIData",
    tagTypes: ["Users", "Posts"],
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
        credentials: "include"
    }),
    endpoints: (builder) => ({
        allposts: builder.query<IPData, void>({
            query: () => ({
                url: "/posts",
                method: "GET"
            }),
            providesTags: (result) => result ? [
                ...result.posts.map(({ id }) => 
                    ({ type: "Posts" as const, id })),
                { type: "Posts", id: "LIST" },
            ] : [{ type: "Posts", id: "LIST" }]
        }),
        post: builder.query<IPost, number>({
            query: (id) => ({
                url: `/posts/${id}`,
                method: "GET"
            }),
            providesTags: ["Posts"]
        }),
        allusers: builder.query<IUData, void>({
            query: () => ({
                url: "/users",
                method: "GET"
            }),
            providesTags: (result) => result ? [
                ...result.users.map(({ id }) => 
                    ({ type: "Users" as const, id })),
                { type: "Users", id: "LIST" },
            ] : [{ type: "Users", id: "LIST" }]
        }),
        user: builder.query<IUser, number>({
            query: (id) => ({
                url: `/users/${id}`,
                method: "GET"
            }),
            providesTags: ["Users"]
        }),
        log: builder.mutation<ILog, LType>({
            query: (payload) => ({
                url: "/auth/login",
                method: "POST",
                body: payload
            }),
            invalidatesTags: ["Users"]
        }),
    })
});


