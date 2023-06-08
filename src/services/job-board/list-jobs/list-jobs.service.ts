import { getJSON, getPublicJSON } from '../../../utils';
import { getConfig } from '../../../utils/config/config';
import { ListJobsOptions, ListJobsResponse } from './list-jobs.service.types';

const { WENEX_API_ROOT } = getConfig();

export const ListJobsRequest = ({
  userType, token, requestType, isPublic, filterTp,
}: ListJobsOptions): Promise<ListJobsResponse> => {
  if (isPublic === 'YES') {
    if (filterTp !== undefined) {
      const jobPrefArray = JSON.stringify(filterTp.jobPref);
      const hireTypeArray = JSON.stringify(filterTp.jobHireTp);
      const jobTypeArray = JSON.stringify(filterTp.jobType);
      return getPublicJSON(`${WENEX_API_ROOT}?userType=${userType}&isPublic=${isPublic}&jobPref=${jobPrefArray}&jobType=${jobTypeArray}&jobHireTp=${hireTypeArray}`, requestType);
    }
    return getPublicJSON(`${WENEX_API_ROOT}?userType=${userType}&isPublic=${isPublic}`, requestType);
  }
  if (token) {
    return getJSON(`${WENEX_API_ROOT}?userType=${userType}&isPublic=${isPublic}`, token, requestType);
  }
  return getJSON(`${WENEX_API_ROOT}?userType=${userType}&isPublic=${isPublic}`, '', requestType);
};
