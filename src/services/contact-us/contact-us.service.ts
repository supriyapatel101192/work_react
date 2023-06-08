import { postJSON } from '../../utils';
import { getConfig } from '../../utils/config/config';
import { ContactUsOptions, ContactUsResponse } from './contact-us.service.types';

const { WENEX_API_ROOT } = getConfig();

export const ContactUsPostRequest = ({ inputBody, requestType }: ContactUsOptions): Promise<ContactUsResponse> => postJSON(`${WENEX_API_ROOT}`, '', requestType, inputBody as unknown as BodyInit);
