import { currentRoute } from "./model";
import { PostPage } from "./ui";
import { chainAuthorized } from "@shared/route";

export const PostRoute = {
  view: PostPage,
  route: chainAuthorized(currentRoute),
};
