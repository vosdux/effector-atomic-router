import { createHistoryRouter, createRoute } from "atomic-router";
import { sample } from "effector";
import { createBrowserHistory } from "history";
import { appStarted } from "./init";

export const routes = {
  auth: {
    signIn: createRoute(),
    signUp: createRoute(),
  },
  private: {
    posts: createRoute(),
    post: createRoute<{ postId: string }>(),
  },
};

const mappedRoutes = [
  { path: "/sign-in", route: routes.auth.signIn },
  { path: "/sign-up", route: routes.auth.signUp },
  { path: "/posts", route: routes.private.posts },
  { path: "/post/:postId", route: routes.private.post },
];

export const router = createHistoryRouter({
  routes: mappedRoutes,
});

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
});

// sample({
//   clock: appStarted,
//   target: routes.auth.signIn.open,
// })
