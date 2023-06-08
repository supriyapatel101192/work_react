import { ContactUsResults } from '../../services/contact-us/contact-us.service.types';
import { ForgotPasswordResults } from '../../services/forgot-password/forgot-password.service.types';
import { ProfileResults } from '../../services/get-profile/get-profile.service.types';
import { LoginTokenResults } from '../../services/login/login-token.service.types';

export type WenexAppState = {
    readonly data: {
        show: string;
    }
    readonly contactUs: ContactUsResults;
    readonly tokenData: LoginTokenResults;
    readonly profileData: ProfileResults;
    readonly forgotPassKeyData: ForgotPasswordResults;
}
