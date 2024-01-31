import { chainAuthorized } from "@shared/route";
import { currentRoute } from "./model";
import { PostsPage } from "./ui";

export const PostsRoute = {
  view: PostsPage,
  route: chainAuthorized(currentRoute),
};
