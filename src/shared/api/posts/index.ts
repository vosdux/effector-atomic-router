import { api } from "../api";
import { Params, Response } from "./model";

const getToken = () => `Bearer ${localStorage.getItem("token")}`;

export const getPosts = async (params?: Params) =>
  api
    .get("posts", {
      searchParams: params,
      headers: { Authorization: getToken() },
    })
    .json<Response[]>();

export const getPostById = async (id: string) =>
  api
    .get(`posts/${id}`, {
      headers: { Authorization: getToken() },
    })
    .json<Response>();

export const updatePost = (body: Response) =>
  api
    .put(`posts/${body.id}`, {
      json: body,
      headers: { Authorization: getToken() },
    })
    .json<Response>();
