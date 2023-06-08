export type RegisterInput = {
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
export type RegisterTransportType = {
  data: {
    id: string,
    message: string;
  }
  is_error: boolean;
};

export type RegisterResult= {
  message: string;
  error: boolean;
  errorMessage: string;
};
