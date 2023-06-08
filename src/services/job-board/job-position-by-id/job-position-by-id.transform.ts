import { JobPositionByIdResponse, JobPositionByIdResults } from './job-position-by-id.service.types';

export const JobPositionByIdTransform: (response: JobPositionByIdResponse) => JobPositionByIdResults = (jobPositionByIdResults) => {
  const { data, is_error } = jobPositionByIdResults;
  const result :JobPositionByIdResults = {
    jobData: {
      collegePassoutYear: [],
      collegePreferred: [],
      collegeTier: {
        key: '',
        value: '',
      },
      courseSpecialization: [],
      endDate: '',
      hireTP: {
        key: '',
        value: '',
      },
      id: '',
      interviewStages: [],
      jobForOrg: {
        key: '',
        value: '',
      },
      jobLocations: [],
      jobName: '',
      jobNameId: '',
      jobPreference: {
        key: '',
        value: '',
      },
      jobRating: '',
      jobTitle: '',
      jobTp: {
        key: '',
        value: '',
      },
      logoUrl: '',
      maxExp: 0,
      maxSalary: 0,
      minExp: 0,
      minSalary: 0,
      onlyDisabled: false,
      onlyFemale: false,
      postPublic: false,
      rolesResponsibility: [],
      skillsGoodToHave: [],
      skillsMustHave: [],
      startDate: '',
      updatedAt: '',
      updatedBy: {
        id: 0,
        value: '',
      },
      updatedByOrg: {
        id: 0,
        value: '',
      },
      useLogo: false,
    },
    isError: false,
  };

  if (is_error) {
    result.isError = is_error;
  } else {
    result.jobData.endDate = data.endDate ?? '';
    result.jobData.id = data.id ?? '';
    result.jobData.jobLocations = data.jobLocations ?? [];
    result.jobData.jobName = data.jobName ?? '';
    result.jobData.jobNameId = data.jobNameId ?? '';
    result.jobData.jobForOrg.key = data.jobForOrg?.key ?? '';
    result.jobData.jobForOrg.value = data.jobForOrg?.value ?? '';
    result.jobData.jobRating = data.jobRating ?? '';
    result.jobData.jobTitle = data.jobTitle ?? '';
    result.jobData.jobTp = data.jobTp ?? '';
    result.jobData.updatedByOrg.id = data.updatedByOrg?.id ?? 0;
    result.jobData.updatedByOrg.value = data.updatedByOrg?.value ?? '';
    result.jobData.logoUrl = data.logoUrl ?? '';
    result.jobData.maxExp = data.maxExp ?? 0;
    result.jobData.maxSalary = data.maxSalary ?? 0;
    result.jobData.minExp = data.minExp ?? 0;
    result.jobData.minSalary = data.minSalary ?? 0;
    result.jobData.onlyDisabled = data.onlyDisabled ?? false;
    result.jobData.onlyFemale = data.onlyFemale ?? false;
    result.jobData.postPublic = data.postPublic ?? false;
    result.jobData.rolesResponsibility = data.rolesResponsibility ?? [];
    result.jobData.skillsGoodToHave = data.skillsGoodToHave ?? [];
    result.jobData.skillsMustHave = data.skillsMustHave ?? [];
    result.jobData.startDate = data.startDate ?? '';
    result.jobData.updatedAt = data.updatedAt ?? '';
    result.jobData.updatedBy.id = data.updatedBy?.id ?? '';
    result.jobData.updatedBy.value = data.updatedBy?.value ?? '';
    result.jobData.useLogo = data.useLogo ?? false;
    result.jobData.collegePassoutYear = data.collegePassoutYear ?? [];
    result.jobData.collegePreferred = data.collegePreferred ?? [];
    result.jobData.collegeTier.key = data.collegeTier?.key ?? '';
    result.jobData.collegeTier.value = data.collegeTier?.value ?? '';
    result.jobData.courseSpecialization = data.courseSpecialization ?? [];
    result.jobData.hireTP.key = data.hireTP?.key ?? '';
    result.jobData.hireTP.value = data.hireTP?.value ?? '';
    result.jobData.interviewStages = data.interviewStages ?? [];
    result.jobData.jobPreference.key = data.jobPreference.key ?? '';
    result.jobData.jobPreference.key = data.jobPreference.value ?? '';
    result.isError = is_error;
  }
  return result;
};
