import { getJSON, getPublicJSON } from '../../../utils';
import { getConfig } from '../../../utils/config/config';
import { ListCollegeOptions, ListCollegeResponse } from './list-college.service.types';

const { WENEX_API_ROOT } = getConfig();

export const ListCollegeRequest = ({
  userType, token, requestType, isPublic, metaCode,
}: ListCollegeOptions): Promise<ListCollegeResponse> => {
  if (isPublic === 'YES') {
    return getPublicJSON(`${WENEX_API_ROOT}?metaCode=${metaCode}&isPublic=${isPublic}`, requestType);
  }
  if (token) {
    return getJSON(`${WENEX_API_ROOT}?userType=${userType}&isPublic=${isPublic}`, token, requestType);
  }
  return getPublicJSON(`${WENEX_API_ROOT}?metaCode=${metaCode}&isPublic=${isPublic}`, requestType);
};
