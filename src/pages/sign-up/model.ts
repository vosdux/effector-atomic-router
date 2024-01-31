import { signUp } from "@shared/api/auth";
import { $token, tokenRecived } from "@shared/auth";
import { routes } from "@shared/config/routes";
import { redirect } from "atomic-router";
import { createEffect, sample } from "effector";

export const currentRoute = routes.auth.signUp;

export const signUpFx = createEffect(signUp);

sample({
  clock: signUpFx.doneData,
  source: $token,
  fn(_, clk) {
    return clk.accessToken;
  },
  target: tokenRecived,
});

redirect({
  clock: signUpFx.doneData,
  route: routes.private.posts,
});
