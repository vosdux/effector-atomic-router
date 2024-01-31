export type Response = {
  userId: number;
  id: number;
  title: string;
  body: string;
  total: number;
};

export type Params = {
  _q?: string;
  _page?: number;
};
