import T "../data-types/types";
import DTOs "../dtos/DTOs";
import Result "mo:base/Result";
import Text "mo:base/Text";
import Array "mo:base/Array";
import Principal "mo:base/Principal";
import Management "../utilities/Management";
import Utilities "../utilities/Utilities";
import Cycles "mo:base/ExperimentalCycles";
import Option "mo:base/Option";
import Environment "../utilities/Environment";

module {
  public class AgentManager() {
    
    private var agents: [T.Agent] = [];

    public func getStableAgents() : [T.Agent] {
      return agents;
    };

    public func setStableAgents(stable_agents: [T.Agent]) {
      agents := stable_agents;
    };

    public func getAgent(principalId: T.PrincipalId) : Result.Result<DTOs.AgentDTO, T.Error> {
      return #err(#NotFound);
    };
    
    public func createAgent(principalId: T.PrincipalId, dto: DTOs.CreateAgentDTO) : Result.Result<T.AgentId, T.Error> {

      var newAgentId: T.AgentId = 0;
      
      let nameTaken = isUsernameTaken(dto.username);
      if(nameTaken){
        return #err(#AlreadyExists);
      };

      //TODO: VALIDATE AND ADD AGENT
      
      if(Text.size(dto.username) < 5 or Text.size(dto.username) > 20){
        return #err(#InvalidData);
      };
      
      if(Text.size(dto.firstName) < 1 or Text.size(dto.firstName) > 50){
        return #err(#InvalidData);
      };
      
      if(Text.size(dto.lastName) < 1 or Text.size(dto.lastName) > 50){
        return #err(#InvalidData);
      };

      //todo: add agent and return id

      return #ok(newAgentId);
    };

    public func updateAgent(principalId: T.PrincipalId, dto: DTOs.UpdateAgentDTO) :  Result.Result<DTOs.UpdateAgentDTO, T.Error> {
      return #err(#NotFound);

    };

    public func getContracts(principalId: T.PrincipalId, dto: DTOs.GetContractsDTO) : Result.Result<[DTOs.ContractDTO], T.Error> {
      return #err(#NotFound);

      
      //get contracts
      //can then split
    };

    public func addContract(principalId: T.PrincipalId) : Result.Result<DTOs.AddContractDTO, T.Error>{
      return #err(#NotFound);
        //check if contract type available
    };

    public func endContract(principalId: T.PrincipalId, dto: DTOs.EndContractDTO) : Result.Result<(), T.Error> {
      return #err(#NotFound);
    };
    
    public func swapClientFocus(principalId: T.PrincipalId, dto: DTOs.SwapClientFocusDTO) : Result.Result<(), T.Error> {
      return #err(#NotFound);
      //split earnings
        //buy contracts with promoted earnings or just take it

    };

    public func promoteClient(principalId: T.PrincipalId, dto: DTOs.PromoteClientDTO) : Result.Result<(), T.Error> {
      return #err(#NotFound);
      //either putting in empty space or swapping for current
    };

    public func isUsernameTaken(username: Text) : Bool {
      return true; //TODO
    };

    
  };
};


    