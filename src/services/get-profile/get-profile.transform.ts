import { ProfileResponse, ProfileResults } from './get-profile.service.types';

export const ProfileTransform: (response: ProfileResponse) => ProfileResults = (profileResults) => {
  const { data, is_error } = profileResults;
  const result :ProfileResults = {
    profileData: {
      firstName: '',
      lastName: '',
      userName: '',
      candPhone: '',
      emailId: '',
      avatar: '',
      candGender: {
        id: '',
        value: '',
      },
      loginTp: {
        id: '',
        value: '',
      },
      dialCode: {
        id: 1,
        value: '',
      },
      candidateData: {
        isFresher: false,
        isFreelancer: false,
      },
      optWewire: false,
    },
    isError: false,
  };
  if (is_error) {
    result.isError = is_error;
  } else {
    result.profileData.firstName = data.firstName ?? '';
    result.profileData.lastName = data.lastName ?? '';
    result.profileData.userName = data.userName ?? '';
    result.profileData.candPhone = data.candPhone ?? '';
    result.profileData.emailId = data.emailId ?? '';
    result.profileData.avatar = data.avatar ?? '';
    result.profileData.candGender.id = data.candGender?.id ?? 'UNK';
    result.profileData.candGender.value = data.candGender?.value ?? 'Unknown';
    result.profileData.loginTp.id = data.loginTp?.id ?? 'UNK';
    result.profileData.loginTp.value = data.loginTp?.value ?? 'Unknown';
    result.profileData.dialCode.id = data.dialCode?.id ?? '';
    result.profileData.dialCode.value = data.dialCode?.value ?? '';
    result.profileData.candidateData.isFresher = data.candidateData?.isFresher ?? false;
    result.profileData.candidateData.isFreelancer = data.candidateData?.isFreelancer ?? false;
    result.profileData.optWewire = data.optWewire ?? false;
    result.isError = is_error;
  }
  return result;
};
