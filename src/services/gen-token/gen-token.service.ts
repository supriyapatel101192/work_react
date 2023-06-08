import { getToken } from '../../utils';
import { getConfig } from '../../utils/config/config';
import { GenTokenOptions, GenTokenResponse } from './gen-token.service.types';

const { WENEX_API_ROOT } = getConfig();

export const GenTokenRequest = ({ userType, requestType }: GenTokenOptions): Promise<GenTokenResponse> => getToken(`${WENEX_API_ROOT}?userType=${userType}`, requestType);
// export const WNXLoginGetRequest = ({
//   userType, requestType, userName, passKey,
// }: WNXLoginOptions): Promise<GenTokenResponse> => getLogin(`${WENEX_API_ROOT}?userType=${userType}`, requestType, userName, passKey);
