import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Text "mo:base/Text";
import T "../backend/data-types/types";

actor Self {

    private stable var cardsPool: [T.Card] = [];
  
    public shared query ({ caller }) func getCards() : async Result.Result<[T.Card], T.Error> {
        assert not Principal.isAnonymous(caller);
        let principalId = Principal.toText(caller);
        return #ok(cardsPool);
    };
        
    system func preupgrade() {
    };

    system func postupgrade() {
    };

};
