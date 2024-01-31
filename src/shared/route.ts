import { $isAuth } from "@shared/auth";
import {
  RouteInstance,
  RouteParams,
  RouteParamsAndQuery,
  chainRoute,
} from "atomic-router";
import { createEvent, sample } from "effector";

export function chainAuthorized<Params extends RouteParams>(
  route: RouteInstance<Params>
) {
  const checkSessionStarted = createEvent<RouteParamsAndQuery<Params>>();

  const alreadyAuthorized = sample({
    clock: checkSessionStarted,
    filter: $isAuth,
  });

  return chainRoute({
    route,
    beforeOpen: checkSessionStarted,
    openOn: [alreadyAuthorized],
  });
}
