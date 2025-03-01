export const idlFactory = ({ IDL }) => {
  const AppStatusDTO = IDL.Record({
    'version' : IDL.Text,
    'onHold' : IDL.Bool,
  });
  const Error = IDL.Variant({
    'DecodeError' : IDL.Null,
    'NotAllowed' : IDL.Null,
    'NotEnoughFunds' : IDL.Null,
    'NotFound' : IDL.Null,
    'NotAuthorized' : IDL.Null,
    'InvalidData' : IDL.Null,
    'AlreadyExists' : IDL.Null,
    'PaymentError' : IDL.Null,
  });
  const Result_1 = IDL.Variant({ 'ok' : AppStatusDTO, 'err' : Error });
  const PrincipalId = IDL.Text;
  const Profile = IDL.Record({
    'username' : IDL.Text,
    'createdOn' : IDL.Int,
    'profilePictureExtension' : IDL.Text,
    'profilePicture' : IDL.Vec(IDL.Nat8),
    'termsAgreed' : IDL.Bool,
    'principalId' : PrincipalId,
  });
  const Result = IDL.Variant({ 'ok' : Profile, 'err' : Error });
  return IDL.Service({
    'getAppStatus' : IDL.Func([], [Result_1], ['query']),
    'getProfile' : IDL.Func([], [Result], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
