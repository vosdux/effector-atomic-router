import { createRoutesView } from "atomic-router-react";
import { SignInRoute } from "./sign-in";
import { SignUpRoute } from "./sign-up";

export const Pages = createRoutesView({
  routes: [SignInRoute, SignUpRoute],
});
