import { RegisterFrsPostRequest } from './register-fresher/register-fresher.service';
import {
  RegisterFrsService, RegisterFrsOptions, RegisterFrsResponse, RegisterFrsResults,
} from './register-fresher/register-fresher.service.types';
import { RegisterFrsTransform } from './register-fresher/register-fresher.transform';
import { createService } from './service';

const response = 'CC data has been loaded successfully!';

export function loadData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(response);
      if (response === undefined) {
        reject();
      }
    }, 500);
  });
}
export const registerFrsService: RegisterFrsService = createService<RegisterFrsOptions, RegisterFrsResponse, RegisterFrsResults>(RegisterFrsPostRequest, RegisterFrsTransform);
