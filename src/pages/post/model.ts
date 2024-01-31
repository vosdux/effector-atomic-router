import { getPostById, updatePost } from "@shared/api/posts";
import { routes } from "@shared/config/routes";
import { chainRoute } from "atomic-router";
import { createEffect, restore, sample } from "effector";

export const currentRoute = routes.private.post;

export const getPostFx = createEffect(getPostById);
export const $post = restore(getPostFx, null);

export const updatePostFx = createEffect(updatePost);

const route = chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: getPostFx,
    mapParams: (params) => params.params.postId,
  },
});

sample({
  clock: updatePostFx.doneData,
  source: route.$params,
  fn(src) {
    return src.postId;
  },
  target: getPostFx,
});
