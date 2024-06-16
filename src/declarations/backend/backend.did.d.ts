import type { Principal } from "@dfinity/principal";
import type { ActorMethod } from "@dfinity/agent";
import type { IDL } from "@dfinity/candid";

export type AddContractDTO = {};
export type AgentDTO = {};
export type AgentId = bigint;
export type ContractDTO = {};
export interface CreateAgentDTO {
  displayName: string;
  profilePictureExtension: string;
  agencyName: string;
  profilePicture: [] | [Uint8Array | number[]];
}
export type EndContractDTO = {};
export type Error =
  | { DecodeError: null }
  | { NotAllowed: null }
  | { NotEnoughFunds: null }
  | { NotFound: null }
  | { NotAuthorized: null }
  | { InvalidData: null }
  | { AlreadyExists: null }
  | { PaymentError: null };
export type GetContractsDTO = {};
export type PromoteClientDTO = {};
export type Result = { ok: UpdateAgentDTO } | { err: Error };
export type Result_1 = { ok: null } | { err: Error };
export type Result_2 = { ok: boolean } | { err: Error };
export type Result_3 = { ok: Array<ContractDTO> } | { err: Error };
export type Result_4 = { ok: AgentDTO } | { err: Error };
export type Result_5 = { ok: AgentId } | { err: Error };
export type Result_6 = { ok: AddContractDTO } | { err: Error };
export type SwapClientFocusDTO = {};
export type UpdateAgentDTO = {};
export interface _SERVICE {
  addContract: ActorMethod<[AddContractDTO], Result_6>;
  createAgent: ActorMethod<[CreateAgentDTO], Result_5>;
  endContract: ActorMethod<[EndContractDTO], Result_1>;
  getAgent: ActorMethod<[], Result_4>;
  getContracts: ActorMethod<[GetContractsDTO], Result_3>;
  isAgencyNameTaken: ActorMethod<[string], Result_2>;
  promoteClient: ActorMethod<[PromoteClientDTO], Result_1>;
  swapClientFocus: ActorMethod<[SwapClientFocusDTO], Result_1>;
  updateAgent: ActorMethod<[UpdateAgentDTO], Result>;
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
