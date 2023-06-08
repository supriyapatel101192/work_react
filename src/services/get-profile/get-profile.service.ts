import { getCommonApiToken } from '../../utils';
import { getConfig } from '../../utils/config/config';
import { ProfileOptions, ProfileResponse } from './get-profile.service.types';

const { WENEX_API_ROOT } = getConfig();

export const ProfileRequest = ({ token, requestType, userType }: ProfileOptions): Promise<ProfileResponse> => getCommonApiToken(`${WENEX_API_ROOT}?userType=${userType}`, requestType, token);
