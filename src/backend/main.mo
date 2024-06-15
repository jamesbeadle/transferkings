import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Text "mo:base/Text";
import T "data-types/types";
import DTOs "dtos/DTOs";
import AgentManager "managers/agent-manager";


actor Self {
  
  private let agentManager = AgentManager.AgentManager();
  
  public shared query ({ caller }) func getAgent() : async Result.Result<DTOs.AgentDTO, T.Error> {
    assert not Principal.isAnonymous(caller);
    let principalId = Principal.toText(caller);
    return agentManager.getAgent(principalId);
  };
    
  public shared ({ caller }) func createAgent(dto: DTOs.CreateAgentDTO) : async Result.Result<T.AgentId, T.Error> {
    assert not Principal.isAnonymous(caller);
    let principalId = Principal.toText(caller);
    return agentManager.createAgent(principalId, dto);
  };

  public shared ({ caller }) func updateAgent(dto: DTOs.UpdateAgentDTO) : async Result.Result<DTOs.UpdateAgentDTO, T.Error> {
    assert not Principal.isAnonymous(caller);
    let principalId = Principal.toText(caller);
    return agentManager.updateAgent(principalId, dto);
  };

  public shared query ({ caller }) func getContracts(dto: DTOs.GetContractsDTO) : async Result.Result<[DTOs.ContractDTO], T.Error> {
    assert not Principal.isAnonymous(caller);
    let principalId = Principal.toText(caller);
    return agentManager.getContracts(principalId, dto);
  };

  public shared ({ caller }) func addContract(dto: DTOs.AddContractDTO) : async Result.Result<DTOs.AddContractDTO, T.Error>{
    assert not Principal.isAnonymous(caller);
    let principalId = Principal.toText(caller);
    return agentManager.updateAgent(principalId, dto);
  };

  public shared ({ caller }) func endContract(dto: DTOs.EndContractDTO) : async Result.Result<(), T.Error> {
    assert not Principal.isAnonymous(caller);
    let principalId = Principal.toText(caller);
    return agentManager.endContract(principalId, dto);
  };
  
  public shared ({ caller }) func swapClientFocus(dto: DTOs.SwapClientFocusDTO) : async Result.Result<(), T.Error> {
    assert not Principal.isAnonymous(caller);
    let principalId = Principal.toText(caller);
    return agentManager.swapClientFocus(principalId, dto);

  };

  public shared ({ caller }) func promoteClient(dto: DTOs.PromoteClientDTO) : async Result.Result<(), T.Error> {
    assert not Principal.isAnonymous(caller);
    let principalId = Principal.toText(caller);
    return agentManager.promoteClient(principalId, dto);
  };

  public shared ({ caller }) func isUsernameTaken(username : Text) : async Result.Result<Bool, T.Error> {
    assert not Principal.isAnonymous(caller);
    return #ok(agentManager.isUsernameTaken(username));
  };
  
  //TODO: Stable Variables  
  private stable var stable_agents: [T.Agent] = [];
  
  system func preupgrade() {
    stable_agents := agentManager.getStableAgents();
  };

  system func postupgrade() {
    agentManager.setStableAgents(stable_agents);
  };

};
