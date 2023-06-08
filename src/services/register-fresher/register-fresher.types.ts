export type CollegeData = {
  college: number,
  course: number,
  isCurrent: boolean,
  currentYear: number,
  startDate: string,
  endDate: string,
  internshipId: string,
  oCollege: string,
  oCollegeLoc: string,
  oCourse: string,
}
export type RegisterFrsInput = {
  firstName: string,
  lastName: string,
  userName: string,
  dialId: number,
  avatar: string,
  gender: string,
  phone: string,
  phoneTp: string,
  emailId: string,
  loginTp: string,
  isFresher: boolean,
  isFreelancer: boolean,
  collegeData: CollegeData
};

export type FileInput = {
  fileData: string,
}
export type RegisterFrsTransportType = {
  data: {
    id: string,
    message: string;
  }
  is_error: boolean;
};

export type RegisterFrsResult= {
  message: string;
  error: boolean;
  errorMessage: string;
};
