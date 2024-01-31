import { getPosts } from "@shared/api/posts";
import { routes } from "@shared/config/routes";
import { showErrorNotificationFx } from "@shared/notification";
import { chainRoute } from "atomic-router";
import { combine, createEffect, createEvent, restore, sample } from "effector";

export const currentRoute = routes.private.posts;

export const getPostsFx = createEffect(getPosts);
export const $posts = restore(getPostsFx, []);

export const searchChanged = createEvent<string>();
export const pageChanged = createEvent<number>();
const $query = restore(searchChanged, "");
export const $page = restore(pageChanged, 1);
const $queryStore = combine({ _q: $query, _page: $page });

sample({
  source: $queryStore,
  target: getPostsFx,
});

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: getPostsFx,
    mapParams: () => ({ _page: 0 }),
  },
});

sample({
  clock: getPostsFx.failData,
  target: showErrorNotificationFx,
});
