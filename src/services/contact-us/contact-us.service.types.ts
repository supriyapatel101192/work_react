import { Service } from '../service.types';
import { ParamOption } from '../types';

import { ContactUsInput, ContactUsResult, ContactUsTransportType } from './contact-us.types';

export type ContactUsOptions = { inputBody:ContactUsInput } & ParamOption;

export type ContactUsResponse = ContactUsTransportType;

export type ContactUsResults = ContactUsResult;

export type ContactUsService = Service<ContactUsOptions, ContactUsResult>;
