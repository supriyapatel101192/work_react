import { GenTokenResults } from '../../services/gen-token/gen-token.service.types';
import { ListCollegeResults } from '../../services/meta-data/list-college/list-college.service.types';
import { ListSpecResults } from '../../services/meta-data/list-spec/list-spec.service.types';
import { MetaDataAppState } from './action.types';

export const getToken = (state: MetaDataAppState): GenTokenResults => state.genToken;

export const getAllCollege = (state: MetaDataAppState): ListCollegeResults => state.listCollege;

export const getAllSpec = (state: MetaDataAppState): ListSpecResults => state.listSpec;
