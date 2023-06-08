export type ContactUsInput = {
  name: string,
  dialCode: number,
  phone: string,
  email: string,
  descAbout: string,
  description: string,
  userType: string
};
export type ContactUsTransportType = {
  data: {
    id: string,
    message: string;
  }
  is_error: boolean;
};

export type ContactUsResult= {
  message: string;
  error: boolean;
  errorMessage: string;
};
