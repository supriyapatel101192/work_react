import { ContactUsResults } from '../../services/contact-us/contact-us.service.types';
import { ForgotPasswordResults } from '../../services/forgot-password/forgot-password.service.types';
import { ProfileResults } from '../../services/get-profile/get-profile.service.types';
import { WenexAppState } from './action.types';

export const getData = (state: WenexAppState): string => state.data.show;
export const getContactUsResponse = (state: WenexAppState): ContactUsResults => state.contactUs;
export const getProfileResponse = (state: WenexAppState): ProfileResults => state.profileData;
export const getForgotPasswordResponse = (state: WenexAppState): ForgotPasswordResults => state.forgotPassKeyData;
