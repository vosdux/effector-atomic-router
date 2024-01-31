import { api } from "../api";
import { Body, Response } from "./model";

export const signIn = async (json: Body) =>
  api.post("login", { json }).json<Response>();

export const signUp = async (json: Body) =>
  api.post("register", { json }).json<Response>();
