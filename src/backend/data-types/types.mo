import Countries "countries";
import Base "mo:waterway-mops/BaseTypes";

module Types {

  public type Profile = {
    principalId: Base.PrincipalId;
    username: Text;
    createdOn: Int;
    profilePicture: Blob;
    profilePictureExtension: Text;
    termsAgreed: Bool;
  };

  public type CardType = {
    #Shirt;
    #Player;
    #Badge;
    #Moment;
    #Art;
  };

  public type CardStyle = {
    #Normal;
    #Pearlescent; //Break losing sream
    #Bronze; //2 consecutive weeks
    #Silver; //3 goals in 4 games
    #Gold; //5 goals in 8 games
    #AllStar; //Weekly Best Player
    #Elite; //Monthly Best Player
    #Ultimate; //Season Best Player
  };


  public type Card = {
    minted: Int;
    selected: Int;
    cardType: CardType;
    cardStyle: CardStyle;
    number: Nat;
    sourcePackId: Nat;
  };

  public type Pack = {
    created: Int;
    cards: [Card];
    soldOn: ?Int;
    packType: PackType;
  };

  public type PackType = {
    #Purchased;
    #Prize;
    #SpecialEdition;
  };








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
    agencyId: ?AgencyId;
    contractLimits: ContractLimits;
    contracts: [Contract];
    agentName : Text;
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
