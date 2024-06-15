
module Types {

  public type PrincipalId = Text;
  public type AgencyId = CanisterId;
  public type CanisterId = Text;
  public type PlayerId = Nat;
  public type ClubId = Nat;
  public type CalendarMonth = Nat8;
  public type InternationalTeamId = Nat16;
  public type ClubLeagueId = Nat;
  public type AgentId = Nat;

  public type Error = {
    #NotFound;
    #AlreadyExists;
    #NotAuthorized;
    #NotAllowed;
    #DecodeError;
    #InvalidData;
    #NotEnoughFunds;
    #PaymentError;
  };

  public type Profile = {
    principal : PrincipalId;
    username : Text;
    displayName : Text;
    profilePicture: ?Blob;
    profilePictureExtension: Text;
    createDate : Int;
  };

  public type Agency = {
    id: Agency;
    ownerId: PrincipalId;
    name: Text;
    logo : ?Blob;
    banner : ?Blob;
    logoExtension: Text;
    bannerExtension: Text;
    createdOn: Int;
    agents: [Agent];
  };

  public type Agent = {
    principalId: PrincipalId;
    agencyId: AgencyId;
    joined: Int;
    contractLimits: ContractLimits;
    contracts: [Contract]
  };

  public type ContractLimits = {
    allStarContractMax: Nat;
    squadPlayerContractMax: Nat;
    prospectsContractMax: Nat;
    academyContractMax: Nat;
    lowerLeagueContractMax: Nat;
  };

  public type Contract = {
    playerId: PlayerId;
  };  

  public type Player = {
    id: PlayerId;
    firstName: Text;
    lastName: Text;
    nickname: Text;
    dob: Int;
    currentClubId: ClubId;
    clubHistory: ?ClubHistory;
    internationalHistory: ?InternationalHistory; 
    value: Nat;
    valueHistory: ValueHistory;
    achievements: Achievements;
  };  

  public type Club = {
    id: ClubId;
  };

  public type InternationalTeam = {
    id: InternationalTeamId;
  };

  public type ClubHistory = {

  };

  public type InternationalHistory = {

  };

  public type ValueHistory = {

  };

  public type Achievements = {
    totalTrophies: Nat16;
    playerAwards: [Award];
    clubAwards: [Award];
    internationalAwards: [Award];
  };

  public type Award = {
    #PlayerAward: PlayerAward;
    #ClubAward: ClubAward;
    #InternationalAward: InternationalAward;
  };

  public type ClubLeague = {
    id: ClubLeagueId;
  };

  public type PlayerAward = {
    
  };

  public type ClubAward = {
    clubId: ClubId;
  };

  public type InternationalAward = {
    teamId: InternationalTeamId;
  };
};
