export type LoginTokenTransportType = {
  data: string
  is_error: string;
};

export type LoginTokenResult= {
  token: string;
  errorMessage: string;
};
