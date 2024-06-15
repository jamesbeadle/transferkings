export const idlFactory = ({ IDL }) => {
  const AddContractDTO = IDL.Record({});
  const Error = IDL.Variant({
    DecodeError: IDL.Null,
    NotAllowed: IDL.Null,
    NotEnoughFunds: IDL.Null,
    NotFound: IDL.Null,
    NotAuthorized: IDL.Null,
    InvalidData: IDL.Null,
    AlreadyExists: IDL.Null,
    PaymentError: IDL.Null,
  });
  const Result_6 = IDL.Variant({ ok: AddContractDTO, err: Error });
  const CreateAgentDTO = IDL.Record({
    username: IDL.Text,
    lastName: IDL.Text,
    firstName: IDL.Text,
  });
  const AgentId = IDL.Nat;
  const Result_5 = IDL.Variant({ ok: AgentId, err: Error });
  const EndContractDTO = IDL.Record({});
  const Result_1 = IDL.Variant({ ok: IDL.Null, err: Error });
  const AgentDTO = IDL.Record({});
  const Result_4 = IDL.Variant({ ok: AgentDTO, err: Error });
  const GetContractsDTO = IDL.Record({});
  const ContractDTO = IDL.Record({});
  const Result_3 = IDL.Variant({ ok: IDL.Vec(ContractDTO), err: Error });
  const Result_2 = IDL.Variant({ ok: IDL.Bool, err: Error });
  const PromoteClientDTO = IDL.Record({});
  const SwapClientFocusDTO = IDL.Record({});
  const UpdateAgentDTO = IDL.Record({});
  const Result = IDL.Variant({ ok: UpdateAgentDTO, err: Error });
  return IDL.Service({
    addContract: IDL.Func([AddContractDTO], [Result_6], []),
    createAgent: IDL.Func([CreateAgentDTO], [Result_5], []),
    endContract: IDL.Func([EndContractDTO], [Result_1], []),
    getAgent: IDL.Func([], [Result_4], ["query"]),
    getContracts: IDL.Func([GetContractsDTO], [Result_3], ["query"]),
    isUsernameTaken: IDL.Func([IDL.Text], [Result_2], []),
    promoteClient: IDL.Func([PromoteClientDTO], [Result_1], []),
    swapClientFocus: IDL.Func([SwapClientFocusDTO], [Result_1], []),
    updateAgent: IDL.Func([UpdateAgentDTO], [Result], []),
  });
};
export const init = ({ IDL }) => {
  return [];
};
