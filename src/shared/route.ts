import { $isAuth } from "@shared/auth";
import {
  RouteInstance,
  RouteParams,
  RouteParamsAndQuery,
  chainRoute,
  redirect,
} from "atomic-router";
import { createEvent, sample } from "effector";
import { routes } from "./config/routes";

export function chainAuthorized<Params extends RouteParams>(
  route: RouteInstance<Params>
) {
  const checkSessionStarted = createEvent<RouteParamsAndQuery<Params>>();

  const alreadyAuthorized = sample({
    clock: checkSessionStarted,
    filter: $isAuth,
  });

  const forbidden = sample({
    clock: checkSessionStarted,
    filter: $isAuth.map((v) => !v),
  });

  redirect({
    clock: forbidden,
    route: routes.auth.signIn,
  });

  return chainRoute({
    route,
    beforeOpen: checkSessionStarted,
    openOn: [alreadyAuthorized],
    cancelOn: [forbidden],
  });
}
