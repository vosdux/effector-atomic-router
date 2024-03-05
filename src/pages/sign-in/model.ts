import { signIn } from "@shared/api/auth";
import { $token, tokenRecived } from "@shared/auth";
import { routes } from "@shared/config/routes";
import { showErrorNotificationFx } from "@shared/notification";
import { redirect } from "atomic-router";
import { createEffect, sample } from "effector";

export const currentRoute = routes.auth.signIn;

export const signInFx = createEffect(signIn);

sample({
  clock: signInFx.doneData,
  source: $token,
  fn(_, clk) {
    return clk.accessToken;
  },
  target: tokenRecived,
});

redirect({
  clock: signInFx.doneData,
  route: routes.private.posts,
});

sample({
  clock: signInFx.failData,
  target: showErrorNotificationFx,
});
