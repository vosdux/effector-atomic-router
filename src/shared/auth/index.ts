import { createEvent, createStore } from "effector";
import { persist } from "effector-storage/local";

export const $token = createStore("");
export const tokenRecived = createEvent<string>();
export const tokenExprired = createEvent();

$token.on(tokenRecived, (_, token) => token).reset(tokenExprired);

export const $isAuth = $token.map((state) => !!state);

persist({
  store: $token,
  key: "token",
  serialize(value) {
    return value;
  },
  deserialize(value) {
    return value;
  },
});
