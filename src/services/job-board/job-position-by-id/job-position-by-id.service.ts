import { getJSON, getPublicJSON } from '../../../utils';
import { getConfig } from '../../../utils/config/config';
import { JobPositionByIdOptions, JobPositionByIdResponse } from './job-position-by-id.service.types';

const { WENEX_API_ROOT } = getConfig();

export const JobPositionByIdRequest = ({
  id, isPublic, token, requestType,
}: JobPositionByIdOptions): Promise<JobPositionByIdResponse> => {
  if (isPublic === 'YES') {
    return getPublicJSON(`${WENEX_API_ROOT}?jobId=${id}&isPublic=${isPublic}`, requestType);
  }
  if (token) {
    return getJSON(`${WENEX_API_ROOT}?jobId=${id}&isPublic=${isPublic}`, token, requestType);
  }
  return getJSON(`${WENEX_API_ROOT}?jobId=${id}&isPublic=${isPublic}`, '', requestType);
};
