import { getPostById, updatePost } from "@shared/api/posts";
import { routes } from "@shared/config/routes";
import {
  showErrorNotificationFx,
  showSuccessNotificationFx,
} from "@shared/notification";
import { chainRoute } from "atomic-router";
import { createEffect, restore, sample } from "effector";

export const currentRoute = routes.private.post;

// stores region
export const getPostFx = createEffect(getPostById);
export const $post = restore(getPostFx, null);

export const updatePostFx = createEffect(updatePost);

// samples region
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
  target: [getPostFx],
});

sample({
  clock: updatePostFx.doneData,
  fn() {
    return "post updated";
  },
  target: showSuccessNotificationFx,
});

// api errors notification
sample({
  clock: updatePostFx.failData,
  target: showErrorNotificationFx,
});

sample({
  clock: getPostFx.failData,
  target: showErrorNotificationFx,
});
