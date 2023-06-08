import { GenTokenRequest } from './gen-token/gen-token.service';
import {
  GenTokenService, GenTokenOptions, GenTokenResponse, GenTokenResults,
} from './gen-token/gen-token.service.types';
import { GenTokenTransform } from './gen-token/gen-token.transform';
import { ListCollegeRequest } from './meta-data/list-college/list-college.service';
import {
  ListCollegeService, ListCollegeOptions, ListCollegeResponse, ListCollegeResults,
} from './meta-data/list-college/list-college.service.types';
import { ListCollegeTransform } from './meta-data/list-college/list-college.transform';
import { ListSpecRequest } from './meta-data/list-spec/list-spec.service';
import {
  ListSpecService, ListSpecOptions, ListSpecResponse, ListSpecResults,
} from './meta-data/list-spec/list-spec.service.types';
import { ListSpecTransform } from './meta-data/list-spec/list-spec.transform';

import { createService } from './service';

export const genTokenService: GenTokenService = createService<GenTokenOptions, GenTokenResponse, GenTokenResults>(GenTokenRequest, GenTokenTransform);

export const listCollegeService: ListCollegeService = createService<ListCollegeOptions, ListCollegeResponse, ListCollegeResults>(ListCollegeRequest, ListCollegeTransform);

export const listSpecService: ListSpecService = createService<ListSpecOptions, ListSpecResponse, ListSpecResults>(ListSpecRequest, ListSpecTransform);
