import { api, errorHandler } from "../api";
import { Body, Response } from "./model";

export const signIn = async (json: Body) => {
  try {
    const res = await api.post("login", { json }).json<Response>();
    return res;
  } catch (error) {
    return await errorHandler(error);
  }
};

export const signUp = async (json: Body) => {
  try {
    const res = await api.post("register", { json }).json<Response>();
    return res;
  } catch (error) {
    return await errorHandler(error);
  }
};
