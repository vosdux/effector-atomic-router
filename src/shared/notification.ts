import { notification } from "antd";
import { createEffect } from "effector";

export const showErrorNotificationFx = createEffect((err: Error) =>
  notification.error({ message: err.message })
);

export const showSuccessNotificationFx = createEffect((message: string) =>
  notification.success({ message: message })
);
