import { writable } from "svelte/store";
import type { AppStatusDTO } from "../../../../declarations/backend/backend.did";
import type {
  PlayerPointsDTO,
  PlayerDetailDTO,
} from "../../../../declarations/data_canister/data_canister.did";
import { PlayerEventsService } from "$lib/services/player-events-service";

function createPlayerEventsStore() {
  const { subscribe, set } = writable<PlayerPointsDTO[]>([]);

  async function getPlayerDetails(
    playerId: number,
    seasonId: number,
  ): Promise<PlayerDetailDTO | undefined> {
    return new PlayerEventsService().getPlayerDetails(playerId, seasonId);
  }

  async function getPlayerEventsFromLocalStorage(): Promise<PlayerPointsDTO[]> {
    const cachedPlayersData = localStorage.getItem("player_events");
    let cachedPlayerEvents: PlayerPointsDTO[] = [];
    try {
      cachedPlayerEvents = JSON.parse(cachedPlayersData || "[]");
    } catch (e) {
      cachedPlayerEvents = [];
    }
    return cachedPlayerEvents;
  }

  async function getPlayerEventsFromBackend(
    seasonId: number,
    gameweek: number,
  ): Promise<PlayerPointsDTO[] | undefined> {
    return new PlayerEventsService().getPlayerEvents(seasonId, gameweek);
  }

  return {
    subscribe,
    setPlayerEvents: (players: PlayerPointsDTO[]) => set(players),
    getPlayerDetails,
    getPlayerEventsFromBackend,
  };
}

export const playerEventsStore = createPlayerEventsStore();
