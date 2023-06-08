export type ResumeContactInput = {
  firstName: string;
  lastName: string;
  emailId: string;
  phone: string;
  isFresher: boolean;
  userName:string;
  dialId:number;
  loginTp: string,
  avatar:string;
  gender:string;
  phoneTp:string;
  isFreelancer:boolean;
};
export type ResumeContactTransportType = {
  data: {
    id: string,
    message: string;
  }
  is_error: boolean;
};

export type ResumeContactResult= {
  message: string;
  error: boolean;
  errorMessage: string;
};
