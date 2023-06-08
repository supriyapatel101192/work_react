import { getJSON, getPublicJSON } from '../../../utils';
import { getConfig } from '../../../utils/config/config';
import { ListSpecOptions, ListSpecResponse } from './list-spec.service.types';

const { WENEX_API_ROOT } = getConfig();

export const ListSpecRequest = ({
  userType, token, requestType, isPublic, metaCode,
}: ListSpecOptions): Promise<ListSpecResponse> => {
  if (isPublic === 'YES') {
    return getPublicJSON(`${WENEX_API_ROOT}?metaCode=${metaCode}&isPublic=${isPublic}`, requestType);
  }
  if (token) {
    return getJSON(`${WENEX_API_ROOT}?userType=${userType}&isPublic=${isPublic}`, token, requestType);
  }
  return getPublicJSON(`${WENEX_API_ROOT}?metaCode=${metaCode}&isPublic=${isPublic}`, requestType);
};
