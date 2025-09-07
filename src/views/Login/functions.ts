import router from "@/router";

import type { LoginPayload } from "@/types/login.d.ts";

import { $generateRandomID, $handleErrorMessage } from "@/helpers/helpers.ts";

import { useUserStore } from "@/stores/UserStore.ts";
import useToastComposable from "@/composables/useToastComposable.ts";

const $toastComposable = useToastComposable();
const $userStore = useUserStore();
const $performLogin = async (payload: LoginPayload) => {
  $userStore.$isLoading = true;
  try {
    const userInfo = await $userStore.$performLogin({
      email: payload.email,
      password: payload.password,
    });
    if (userInfo.success) {
      $toastComposable.$create({
        id: $generateRandomID(8),
        type: "success",
        message: `Welcome ${payload.email}! please wait to redirect`,
        position: "topRight",
      });
      if ($userStore.$isLogged) {
        $toastComposable.$removeAllItems();
        router.push("/dashboard");
      }
    }
  } catch (error) {
    const message = $handleErrorMessage(error || {});
    $toastComposable.$create({
      id: $generateRandomID(8),
      type: "danger",
      message: message.error,
      position: "topRight",
    });
    throw message;
  } finally {
    $userStore.$isLoading = false;
  }
};

export { $performLogin };
