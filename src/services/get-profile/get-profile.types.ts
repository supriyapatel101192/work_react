export type Gender = {
  id: string;
  value: string;
}
export type LoginTp = {
  id: string;
  value: string;
}
export type DialCode = {
  id: number;
  value: string;
}
export type CandidateData = {
  isFresher: Boolean;
  isFreelancer: Boolean;
}
export type ProfileDataResult = {
  firstName: string;
  userName: string;
  lastName: string;
  candPhone: string;
  emailId: string;
  loginTp: LoginTp;
  avatar: string;
  candGender: Gender;
  dialCode: DialCode;
  candidateData: CandidateData;
  optWewire: Boolean;

}

export type ProfileTransportType = {
  data: ProfileDataResult;
  is_error: boolean;
};

export type ProfileResult= {
  profileData: ProfileDataResult;
  isError: boolean;
};
