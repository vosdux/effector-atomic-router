import { currentRoute } from "./model";
import { SignIn } from "./ui";

export const SignInRoute = {
  view: SignIn,
  route: currentRoute,
};
