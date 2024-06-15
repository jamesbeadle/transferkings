import { userStore } from "$lib/stores/agent-store";
import { derived, type Readable } from "svelte/store";

export const userGetAgentPicture: Readable<string> = derived(
  userStore,
  (user) =>
    user !== null &&
    user !== undefined &&
    user.agentPicture !== undefined &&
    user.agentPicture.length > 0
      ? URL.createObjectURL(new Blob([new Uint8Array(user.agentPicture)]))
      : "agent_placeholder.png",
);
