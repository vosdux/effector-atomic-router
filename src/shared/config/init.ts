import { createEvent } from "effector";

export const appStarted = createEvent();

appStarted.watch(() => {
  console.log('wathc')
})