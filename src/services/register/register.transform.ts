import { RegisterResponse, RegisterResults } from './register.service.types';

export const RegisterTransform: (response: RegisterResponse) => RegisterResults = (registerResults) => {
  const { data, is_error } = registerResults;
  const result: RegisterResults = {
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
