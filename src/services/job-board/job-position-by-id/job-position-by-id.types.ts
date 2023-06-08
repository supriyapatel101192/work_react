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

export type JobPositionByIdTransportType = {
  data: JobsResult;
  is_error: boolean;
};

export type JobPositionByIdResult= {
  jobData: JobsResult;
  isError: boolean;
};
