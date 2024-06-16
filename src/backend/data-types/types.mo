import Countries "countries";

module Types {

  public type PrincipalId = Text;
  public type AgencyId = Nat;
  public type CanisterId = Text;
  public type PlayerId = Nat;
  public type ClubId = Nat;
  public type CalendarMonth = Nat8;
  public type InternationalTeamId = Nat16;
  public type ClubLeagueId = Nat;
  public type StadiumId = Nat;

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

  //Agent Types

  public type Agency = {
    id: AgencyId;
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
    contractLimits: ContractLimits;
    contracts: [Contract];
    agencyName : Text;
    displayName : Text;
    profilePicture: ?Blob;
    profilePictureExtension: Text;
    createDate : Int;
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

  //Player Types

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

  public type PlayerAward = {
    
  };

  public type ClubAward = {
    clubId: ClubId;
  };

  public type InternationalAward = {
    teamId: InternationalTeamId;
  };

  //Football organisation structure

  public type Association = {
      name: Text;
      country: Countries.Country;
      leagues: [ClubLeagueId];
  };

  public type InternationalTournament = {
    teamIds: [InternationalTeamId];
  };

  public type InternationalTeam = {
    id: InternationalTeamId;
  };

  public type ClubLeague = {
    id: ClubLeagueId;
    clubs: [ClubId];
  };

  public type Club = {
    id: ClubId;
    name: Text;
    nickname: Text;
    stadiumId: StadiumId;
    stadiumHistory: [StadiumHistory];
    country: Countries.Country;
  };

  public type Stadium = {
    id: StadiumId;
    name: Text;
    location: Text;
    capacity: Nat;
    constructed: Int;
    abandoned: Int;
  };

  public type StadiumHistory = {
    stadiumId: StadiumId;
    clubId: ClubId;
    usedFrom: Int;
    usedUntil: Int;
  };



};
