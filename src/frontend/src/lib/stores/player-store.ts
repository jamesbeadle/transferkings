import { writable } from "svelte/store";
import { PlayerService } from "$lib/services/player-service";
import type { PlayerDTO } from "../../../../declarations/data_canister/data_canister.did";

function createPlayerStore() {
  const { subscribe, set } = writable<PlayerDTO[]>([]);

  return {
    subscribe,
    setPlayers: (players: PlayerDTO[]) => set(players),
  };
}

export const playerStore = createPlayerStore();
