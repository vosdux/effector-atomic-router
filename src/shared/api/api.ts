import ky, { HTTPError } from "ky";

export const api = ky.create({ prefixUrl: import.meta.env.VITE_API_URL });

export const errorHandler = async (error: unknown) => {
  const httpError = error as HTTPError;
  if (httpError.name === "HTTPError") {
    const serverMessage = await httpError.response.text();
    throw new Error(serverMessage);
  } else {
    throw new Error(httpError.message);
  }
};
