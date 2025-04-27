import Ids "mo:waterway-mops/Ids";
module Types {

  public type CardId = Nat;

  public type Card = {
    id: CardId;
    cardType: CardType;
    cardCategory: CardCategory;
    designTags: [DesignTag];
    minted: Int;
    selected: Int;
    owner: ?Ids.PrincipalId;
  };

  public type CardType = {
    #Normal;
    #Bronze;
    #Silver;
    #Gold;
    #AllStar;
    #Elite; 
    #Ultimate; 
  };

  public type CardCategory = {
    #League;
    #Club;
    #Player;
  };

  public type DesignTag = {
    #Shirt;
    #Badge;
    #Stadium;
  };

  public type CardEvent = {
    #Goal;
    #Assist;
    #Save;
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
};
