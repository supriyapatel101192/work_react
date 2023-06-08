import { ContactUsPostRequest } from './contact-us/contact-us.service';
import {
  ContactUsService, ContactUsOptions, ContactUsResponse, ContactUsResults,
} from './contact-us/contact-us.service.types';
import { LoginTokenTransform } from './login/login-token.transform';
import { ContactUsTransform } from './contact-us/contact-us.transform';
import { createService } from './service';
import {
  LoginTokenResponse, LoginTokenResults, LoginOptions, LoginService,
} from './login/login-token.service.types';
import { LoginGetRequest } from './login/login-token.service';
import {
  ProfileOptions, ProfileResponse, ProfileResults, ProfileService,
} from './get-profile/get-profile.service.types';
import { ProfileRequest } from './get-profile/get-profile.service';
import { ProfileTransform } from './get-profile/get-profile.transform';
import {
  ForgotPasswordOptions, ForgotPasswordResponse, ForgotPasswordResults, ForgotPasswordService,
} from './forgot-password/forgot-password.service.types';
import { ForgotPasswordRequest } from './forgot-password/forgot-password.service';
import { ForgotPasswordTransform } from './forgot-password/forgot-password.transform';

const response = 'Yo, your data has been loaded successfully!';

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
export const contactUsService: ContactUsService = createService<ContactUsOptions, ContactUsResponse, ContactUsResults>(ContactUsPostRequest, ContactUsTransform);

// export const genWnxTokenService: WNXLoginService = createService<LoginOptions, LoginTokenResponse, GenTokenResults>(WNXLoginGetRequest, GenTokenTransform);

export const loginTokenService: LoginService = createService<LoginOptions, LoginTokenResponse, LoginTokenResults>(LoginGetRequest, LoginTokenTransform);

export const profileService: ProfileService = createService<ProfileOptions, ProfileResponse, ProfileResults>(ProfileRequest, ProfileTransform);

export const forgotPasswordService: ForgotPasswordService = createService<ForgotPasswordOptions, ForgotPasswordResponse, ForgotPasswordResults>(ForgotPasswordRequest, ForgotPasswordTransform);
