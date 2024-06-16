import T "../data-types/types";
import DTOs "../dtos/DTOs";
import Result "mo:base/Result";
import Text "mo:base/Text";
import Array "mo:base/Array";
import Option "mo:base/Option";
import Blob "mo:base/Blob";
import Time "mo:base/Time";
import Buffer "mo:base/Buffer";
import Debug "mo:base/Debug";

module {
  public class AgentManager() {
    
    private var agents: [T.Agent] = [];
    private var uniqueAgentNames: [Text] = [];

    public func getStableAgents() : [T.Agent] {
      return agents;
    };

    public func setStableAgents(stable_agents: [T.Agent]) {
      agents := stable_agents;
    };

    public func getStableUniqueAgentNames() : [Text] {
      return uniqueAgentNames;
    };

    public func setStableUniqueAgentNames(stable_unique_agent_names: [Text]) {
      uniqueAgentNames := stable_unique_agent_names;
    };

    public func getAgent(principalId: T.PrincipalId) : Result.Result<DTOs.AgentDTO, T.Error> {
      let agent = Array.find<T.Agent>(agents, func(agent: T.Agent){
        return agent.principalId == principalId;
      });
      switch(agent){
        case (null){
          return #err(#NotFound);
        };
        case (?foundAgent){
          let dto: DTOs.AgentDTO = {
            principalId = foundAgent.principalId;
            agencyId = foundAgent.agencyId;
            contractLimits = foundAgent.contractLimits;
            contracts = foundAgent.contracts;
            agentName = foundAgent.agentName;
            displayName = foundAgent.displayName;
            profilePicture = foundAgent.profilePicture;
            profilePictureExtension = foundAgent.profilePictureExtension;
            createDate = foundAgent.createDate;
          };
          return #ok(dto);
        }
      };
    };
    
    public func createAgent(principalId: T.PrincipalId, dto: DTOs.CreateAgentDTO) : Result.Result<(), T.Error> {

          Debug.print(debug_show "dto");
          Debug.print(debug_show dto);
      let existingAgent = Array.find<T.Agent>(agents, func(agent: T.Agent){
        agent.principalId == principalId
      });

      if(Option.isSome(existingAgent)){
        return #err(#AlreadyExists);
      };
      
      let nameTaken = isAgentNameTaken(dto.agentName);
      if(nameTaken){
        return #err(#AlreadyExists);
      };
      
      if(Text.size(dto.agentName) < 5 or Text.size(dto.agentName) > 50){
        return #err(#InvalidData);
      };
      
      if(Text.size(dto.displayName) < 5 or Text.size(dto.displayName) > 50){
        return #err(#InvalidData);
      };

      switch(dto.profilePicture){
        case (null){ };
        case (?foundProfilePicture){
          let sizeInKB = Array.size(Blob.toArray(foundProfilePicture)) / 1024;
          //TODO LOG FROM HERE
          Debug.print(debug_show sizeInKB);
          if(sizeInKB <= 0 or sizeInKB > 500){
            return #err(#InvalidData);
          };
        }
      };

      let defaultContractLimits: T.ContractLimits = {
        academyContractMax = 25;
        allStarContractMax = 5;
        lowerLeagueContractMax = 30;
        prospectsContractMax = 20;
        squadPlayerContractMax = 20;
      };

      let newAgent: T.Agent = {
        contractLimits = defaultContractLimits;
        contracts = [];
        createDate = Time.now();
        displayName = dto.displayName;
        principalId = principalId;
        profilePicture = dto.profilePicture;
        profilePictureExtension = dto.profilePictureExtension;
        agentName = dto.agentName;
        agencyId = null;
      };

      let agentBuffer = Buffer.fromArray<T.Agent>(agents);
      agentBuffer.add(newAgent);
      agents := Buffer.toArray(agentBuffer);

      let uniqueAgentNamesBuffer = Buffer.fromArray<Text>(uniqueAgentNames);
      uniqueAgentNamesBuffer.add(newAgent.agentName);
      uniqueAgentNames := Buffer.toArray(uniqueAgentNamesBuffer);

      return #ok();
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

    public func isAgentNameTaken(agentName: Text) : Bool {

      let nameTaken = Array.find<Text>(uniqueAgentNames, func(name: Text){
        name == agentName
      });

      return Option.isSome(nameTaken);
    };

    
  };
};


    