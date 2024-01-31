import { createRoutesView } from "atomic-router-react";
import { SignInRoute } from "./sign-in";
import { SignUpRoute } from "./sign-up";
import { PostsRoute } from "./posts";
import { PostRoute } from "./post";

export const Pages = createRoutesView({
  routes: [SignInRoute, SignUpRoute, PostsRoute, PostRoute],
});
