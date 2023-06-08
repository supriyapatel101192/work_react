import { putCommonApi } from '../../utils';
import { getConfig } from '../../utils/config/config';
import { ForgotPasswordOptions, ForgotPasswordResponse } from './forgot-password.service.types';

const { WENEX_API_ROOT } = getConfig();

export const ForgotPasswordRequest = ({ requestType, userType, userName }: ForgotPasswordOptions): Promise<ForgotPasswordResponse> => putCommonApi(`${WENEX_API_ROOT}?userType=${userType}&userName=${userName}`, requestType);
