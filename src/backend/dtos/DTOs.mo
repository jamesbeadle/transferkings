import T "../data-types/types";

module DTOs {

  public type AgentDTO = {
    principalId: T.PrincipalId;
    agencyId: ?T.AgencyId;
    contractLimits: T.ContractLimits;
    contracts: [T.Contract];
    agentName : Text;
    displayName : Text;
    profilePicture: ?Blob;
    profilePictureExtension: Text;
    createDate : Int;
  };

  public type CreateAgentDTO = {
    agentName: Text;
    displayName: Text;
    profilePicture: ?Blob;
    profilePictureExtension: Text;
  };

  public type UpdateAgentDTO = {

  };

  public type ContractDTO = {

  };

  public type AddContractDTO = {

  };

  public type EndContractDTO = {

  };

  public type SwapClientFocusDTO = {

  };

  public type PromoteClientDTO = {

  };

  public type GetContractsDTO = {
    
  }



};
