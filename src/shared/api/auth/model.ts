export type Body = {
  email: string;
  password: string;
};

export type Response = {
  accessToken: string;
  user: { email: string; id: number };
};
