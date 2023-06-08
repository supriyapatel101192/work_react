import { postPublicFileData } from '../../utils';
import { getConfig } from '../../utils/config/config';
import { RegisterFrsOptions, RegisterFrsResponse } from './register-fresher.service.types';

const { WENEX_API_ROOT } = getConfig();

export const RegisterFrsPostRequest = ({ inputBody, fileUpload, requestType }: RegisterFrsOptions): Promise<RegisterFrsResponse> => postPublicFileData(`${WENEX_API_ROOT}`, requestType, fileUpload, inputBody as unknown as BodyInit);
