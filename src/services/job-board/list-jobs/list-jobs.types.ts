export type CollegeTier = {
  key: string;
  value: string;
}
export type HireTP = {
  key: string;
  value: string;
}
export type JobForOrg = {
  key: string;
  value: string;
}
export type JobPreference = {
  key: string;
  value: string;
}
export type JobTp = {
  key: string;
  value: string;
}
export type RolesResponsibility = {
  id: number;
  value: string;
}
export type UpdatedBy = {
  id: number;
  value: string;
}
export type UpdatedByOrg = {
  id: number;
  value: string;
}
export type JobsResult = {
  collegePassoutYear: number[];
  collegePreferred: number[];
  collegeTier: CollegeTier;
  courseSpecialization: string[];
  endDate: string;
  hireTP: HireTP;
  id: string;
  interviewStages: string[];
  jobForOrg: JobForOrg;
  jobLocations: string[];
  jobName: string;
  jobNameId: string;
  jobPreference: JobPreference;
  jobRating: string;
  jobTitle: string;
  jobTp: JobTp;
  logoUrl: string;
  maxExp: number;
  maxSalary: number;
  minExp: number;
  minSalary: number;
  onlyDisabled: boolean;
  onlyFemale: boolean;
  postPublic: boolean;
  rolesResponsibility: RolesResponsibility[];
  skillsGoodToHave: string[];
  skillsMustHave: string[];
  startDate: string;
  updatedAt: string;
  updatedBy: UpdatedBy;
  updatedByOrg: UpdatedByOrg;
  useLogo: boolean;
}
export type JobData = {
  count : number;
  isNext: boolean;
  isPrev: boolean;
  nextPage: number;
  pages: number;
  prevPage: number;
  results: JobsResult[];
}
export type ListJobsTransportType = {
  data: JobData;
  is_error: boolean;
};

export type JobsResultInfo = {
  endDate: string;
  id: string;
  jobOrg: string;
  jobLocations: string[];
  jobName: string;
  jobNameId: string;
  jobRating: string;
  jobTitle: string;
  jobTp: JobTp;
  logoUrl: string;
  maxExp: number;
  maxSalary: number;
  minExp: number;
  minSalary: number;
  onlyDisabled: boolean;
  onlyFemale: boolean;
  postPublic: boolean;
  rolesResponsibility: RolesResponsibility[];
  skillsGoodToHave: string[];
  skillsMustHave: string[];
  startDate: string;
  updatedAt: string;
  updatedBy: string;
  updatedByOrg: string;
  useLogo: boolean;
}
export type JobInfo = {
  count : number;
  isNext: boolean;
  isPrev: boolean;
  nextPage: number;
  pages: number;
  prevPage: number;
  results: JobsResultInfo[];
}
export type ListJobsResult= {
  count : number;
  isNext: boolean;
  isPrev: boolean;
  nextPage: number;
  pages: number;
  prevPage: number;
  jobData: JobsResult[];
  jobInfo: JobsResultInfo[];
  isError: boolean;
  jobMessage: string;
};

export type FilterJobsResult= {
  jobPref: string[],
  jobType: string[],
  jobHireTp: string[]
};
