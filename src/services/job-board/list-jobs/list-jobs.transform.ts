import { ListJobsResponse, ListJobsResults } from './list-jobs.service.types';
import { JobsResult, JobsResultInfo } from './list-jobs.types';

const AppTransform: (input: JobsResult) => JobsResultInfo = (job) => ({
  endDate: job.endDate,
  id: job.id,
  jobLocations: job.jobLocations,
  jobName: job.jobName,
  jobNameId: job.jobNameId,
  jobOrg: job.jobForOrg.value,
  jobRating: job.jobRating,
  jobTitle: job.jobTitle,
  jobTp: job.jobTp,
  updatedByOrg: job.updatedByOrg.value,
  logoUrl: job.logoUrl,
  maxExp: job.maxExp,
  maxSalary: job.maxSalary,
  minExp: job.minExp,
  minSalary: job.minSalary,
  onlyDisabled: job.onlyDisabled,
  onlyFemale: job.onlyFemale,
  postPublic: job.postPublic,
  rolesResponsibility: job.rolesResponsibility,
  skillsGoodToHave: job.skillsGoodToHave,
  skillsMustHave: job.skillsMustHave,
  startDate: job.startDate,
  updatedAt: job.updatedAt,
  updatedBy: job.updatedBy.value,
  useLogo: job.useLogo,
});
export const ListJobsTransform: (response: ListJobsResponse) => ListJobsResults = (listJobsResults) => {
  const { data, is_error } = listJobsResults;
  const result: ListJobsResults = {
    count: 0,
    isNext: false,
    isPrev: false,
    nextPage: 0,
    prevPage: 0,
    pages: 0,
    jobData: [],
    jobInfo: [],
    isError: false,
    jobMessage: '',
  };
  if (is_error) {
    result.isError = is_error;
  } else {
    result.jobData = data.results;
    // result.jobMessage = 'executed';
    result.jobInfo = data.results.map((job: JobsResult) => AppTransform(job));
  }
  return result;
};
