import { idlFactory } from "../../../../declarations/backend";
import { ActorFactory } from "../utils/actor-factory";
import { isError } from "../utils/helpers";
import type { DataHashDTO } from "../../../../declarations/data_canister/data_canister.did";
import { toasts } from "$lib/stores/toasts-store";
import { authStore } from "$lib/stores/auth-store";

export class DataHashService {
  constructor() {}

  async getAppDataHashes(): Promise<DataHashDTO[] | undefined> {
    try {
      let actor: any = ActorFactory.createActor(
        idlFactory,
        process.env.BACKEND_CANISTER_ID,
      );
      const result = await actor.getDataHashes();
      if (isError(result))
        throw new Error("Failed to fetch data hashes from backend.");
      return result.ok;
    } catch (error) {
      console.error("Failed to fetch data hashes from backend: ", error);
      toasts.addToast({
        type: "error",
        message: "Failed to fetch data hashes from backend.",
      });
    }
  }

  async getDataCanisterDataHashes(): Promise<DataHashDTO[] | undefined> {
    try {
      const identityActor: any =
        await ActorFactory.createDataCanisterIdentityActor(
          authStore,
          process.env.CANISTER_ID_DATA ?? "",
        );
      const result = await identityActor.getDataHashes(process.env.LEAGUE_ID);

      if (isError(result))
        throw new Error("Failed to fetch data hashes from data cansiter.");
      return result.ok;
    } catch (error) {
      console.error("Failed to fetch data hashes from data cansiter: ", error);
      toasts.addToast({
        type: "error",
        message: "Failed to fetch data hashes from data cansiter.",
      });
    }
  }
}
