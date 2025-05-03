import { busy } from "$lib/stores/busy-store";
import { toasts, type Toast } from "$lib/stores/toasts-store";
import { authStore, type AuthSignInParams } from "../stores/auth-store";
import { replaceHistory } from "../utils/route.utils";
import { isNullish } from "@dfinity/utils";

export const signIn = async (
  params: AuthSignInParams,
): Promise<{ success: "ok" | "cancelled" | "error"; err?: unknown }> => {
  try {
    await authStore.signIn(params);

    return { success: "ok" };
  } catch (err: unknown) {
    if (err === "UserInterrupt") {
      return { success: "cancelled" };
    }

    return { success: "error", err };
  } finally {
  }
};

export const signOut = (): Promise<void> => logout({});

export const idleSignOut = async () => logout({});

export const initErrorSignOut = async () =>
  await logout({
    msg: {
      message:
        "You have been signed out because there was an error initalizing your profile.",
      type: "error",
    },
  });

  const logout = async ({ msg = undefined, clearStorages = true,
    }: {
      msg?: Omit<Toast, "id">;
      clearStorages?: boolean;
    }) => {
      busy.start();
      if (typeof localStorage !== "undefined") {
        localStorage.removeItem("user_signup_choice");
      }
      if (clearStorages) {
        await Promise.all([]);
      }
      await authStore.signOut();
      if (msg) {
        toasts.addToast(msg);
      }
      window.location.reload();
    };

const PARAM_MSG = "msg";
const PARAM_LEVEL = "level";

/**
 * If the url contains a msg that has been provided on logout, display it as a toast message. Cleanup url afterwards - we don't want the user to see the message again if reloads the browser
 */
export const displayAndCleanLogoutMsg = () => {
  const urlParams: URLSearchParams = new URLSearchParams(
    window.location.search,
  );

  const msg: string | null = urlParams.get(PARAM_MSG);

  if (isNullish(msg)) {
    return;
  }

  cleanUpMsgUrl();
};

const cleanUpMsgUrl = () => {
  const url: URL = new URL(window.location.href);

  url.searchParams.delete(PARAM_MSG);
  url.searchParams.delete(PARAM_LEVEL);

  replaceHistory(url);
};

