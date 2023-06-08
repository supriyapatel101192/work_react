import { RegisterPostRequest } from './register/register.service';
import {
  RegisterOptions, RegisterResponse, RegisterResults, RegisterService,
} from './register/register.service.types';
import { RegisterTransform } from './register/register.transform';
import { createService } from './service';

export const registerService: RegisterService = createService<RegisterOptions, RegisterResponse, RegisterResults>(RegisterPostRequest, RegisterTransform);
