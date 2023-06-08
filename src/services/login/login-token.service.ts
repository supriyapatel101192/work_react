import { getCommonApi, getLogin, putCommonApi } from '../../utils';
import { getConfig } from '../../utils/config/config';
import { LoginTokenResponse, LoginOptions } from './login-token.service.types';

const { WENEX_API_ROOT } = getConfig();

export const LoginGetRequest = ({
  userType, requestType, userName, passKey,
}: LoginOptions): Promise<LoginTokenResponse> => {
  const digits = passKey.match(/^\d{4}$/);
  if (userName !== '' && passKey === '') {
    return putCommonApi(`${WENEX_API_ROOT}?userType=${userType}&userInfo=${userName}`, requestType);
  }
  if (userName !== '' && digits !== null) {
    return getCommonApi(`${WENEX_API_ROOT}?userOtp=${passKey}&userType=${userType}&userInfo=${userName}`, requestType);
  }
  return getLogin(`${WENEX_API_ROOT}?userType=${userType}`, requestType, userName, passKey);
};
