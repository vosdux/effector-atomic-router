import { createHistoryRouter, createRoute } from 'atomic-router';
import { sample } from 'effector';
import { createBrowserHistory } from 'history';
import { appStarted } from './init';

export const routes = {
  auth: {
    signIn: createRoute(),
    signUp: createRoute(),
  }
}

const mappedRoutes = [
  { path: '/sign-in', route: routes.auth.signIn },
  { path: '/sign-up', route: routes.auth.signUp },
];

export const router = createHistoryRouter({
  routes: mappedRoutes,
});

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
});

sample({
  clock: appStarted,
  target: routes.auth.signIn.open,
})