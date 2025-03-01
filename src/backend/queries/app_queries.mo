import Base "mo:waterway-mops/BaseTypes";
import T "../data-types/types";

module AppQueries {
    public type ProfileDTO = {
        principalId: Base.PrincipalId;
        username: Text;
        createdOn: Int;
        profilePicture: Blob;
        profilePictureExtension: Text;
        termsAgreed: Bool;
    };
}

  