import { postPublicFileData } from '../../utils';
import { getConfig } from '../../utils/config/config';
import { RegisterOptions, RegisterResponse } from './register.service.types';

const { WENEX_API_ROOT } = getConfig();

export const RegisterPostRequest = ({ inputBody, fileUpload, requestType }: RegisterOptions): Promise<RegisterResponse> => postPublicFileData(`${WENEX_API_ROOT}`, requestType, fileUpload, inputBody as unknown as BodyInit);
