import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Text "mo:base/Text";
import T "../backend/data-types/types";

actor Self {

    private stable var cardsPool: [T.Card] = [];
  
    public shared query ({ caller }) func puchasePackOfCards() : async Result.Result<[T.Card], T.Error> {
        assert not Principal.isAnonymous(caller);
        let principalId = Principal.toText(caller);

        //return a random pack of cards

        //remove cards from the pool


        return #ok(cardsPool);
    };

    private func getRandomCard() : T.Card {
        
    };

    private func resetCardsPool(){
        cardsPool := [];
        cardsPool := generateCardsPool();
    };

    private func generateCardsPool() : [T.Card]{
        //use the footballgod data to make cards based on the live players
            //base it on the live data
            //base it on club form
            //create special cards at special moments
    };
        
    system func preupgrade() {
    };

    system func postupgrade() {
    };

};
