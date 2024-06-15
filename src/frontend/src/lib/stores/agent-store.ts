import { authStore } from "$lib/stores/auth-store";
import { replacer } from "$lib/utils/helpers";
import { writable } from "svelte/store";
import type { AgentDTO, UpdateAgentDTO } from "../../../../declarations/backend/backend.did";
import { ActorFactory } from "../utils/actor-factory";
import { isError } from "$lib/utils/helpers";

function createAgentStore() {
  const { subscribe, set } = writable<any>(null);

  async function sync() {
    let localStorageString = localStorage.getItem("agent_data");
    if (localStorageString && localStorageString != "undefined") {
      const localAgent = JSON.parse(localStorageString);
      set(localAgent);
      return;
    }
    try {
      await cacheAgent();
    } catch (error) {
      console.error("Error fetching agent data:", error);
      throw error;
    }
  }

  async function cacheAgent() {
    const identityActor: any = await ActorFactory.createIdentityActor(
      authStore,
      process.env.BACKEND_CANISTER_ID ?? "",
    );

    let getAgentResponse = await identityActor.getAgent();
    let error = isError(getAgentResponse);
    if (error) {
      console.error("Error fetching user agent");
      return;
    }

    let agentData = getAgentResponse.ok;

    set(agentData);
  }

  async function createAgent(agentDTO: UpdateAgentDTO): Promise<any> {
    try {
      const identityActor = await ActorFactory.createIdentityActor(
        authStore,
        process.env.BACKEND_CANISTER_ID ?? "",
      );
      const result = await identityActor.createAgent(agentDTO);
      return result;
    } catch (error) {
      console.error("Error updating username:", error);
      throw error;
    }
  }

  async function updateAgent(updatedAgent: UpdateAgentDTO): Promise<any> {
    try {
      const identityActor = await ActorFactory.createIdentityActor(
        authStore,
        process.env.BACKEND_CANISTER_ID ?? "",
      );
      const result = await identityActor.updateAgentDetail(updatedAgent);
      sync();
      return result;
    } catch (error) {
      console.error("Error updating agent:", error);
      throw error;
    }
  }

  async function checkUsernameAvailability(username: string): Promise<any> {
    try {
      const identityActor = await ActorFactory.createIdentityActor(
        authStore,
        process.env.BACKEND_CANISTER_ID ?? "",
      );
      const result = await identityActor.isUsernameAvailable(username);
      return result;
    } catch (error) {
      console.error("Error getting agent:", error);
      throw error;
    }
  }

  async function updateAgentPicture(picture: File): Promise<any> {
    try {
      const maxPictureSize = 1000;

      if (picture.size > maxPictureSize * 1024) {
        return null;
      }
      const reader = new FileReader();
      reader.readAsArrayBuffer(picture);
      reader.onloadend = async () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const uint8Array = new Uint8Array(arrayBuffer);
        try {
          const identityActor = await ActorFactory.createIdentityActor(
            authStore,
            process.env.BACKEND_CANISTER_ID ?? "",
          );
          const result = await identityActor.updateAgentPicture(uint8Array);
          sync();
          return result;
        } catch (error) {
          console.error(error);
        }
      };
    } catch (error) {
      console.error("Error updating username:", error);
      throw error;
    }
  }

  return {
    subscribe,
    sync,
    createAgent,
    updateAgent,
    updateAgentPicture,
  };
}

export const userStore = createAgentStore();
