import { RegisterFrsResponse, RegisterFrsResults } from './register-fresher.service.types';

export const RegisterFrsTransform: (response: RegisterFrsResponse) => RegisterFrsResults = (registerFrsResults) => {
  const { data, is_error } = registerFrsResults;
  const result: RegisterFrsResults = {
    message: '',
    error: false,
    errorMessage: '',
  };
  if (is_error) {
    result.error = is_error;
    result.errorMessage = 'Backend Issue';
  } else {
    result.message = data.message;
  }
  return result;
};
