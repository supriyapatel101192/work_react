import { GenTokenResults } from '../../services/gen-token/gen-token.service.types';
import { ListCollegeResults } from '../../services/meta-data/list-college/list-college.service.types';
import { ListSpecResults } from '../../services/meta-data/list-spec/list-spec.service.types';

export type MetaDataAppState = {
    readonly genToken: GenTokenResults;
    readonly listCollege: ListCollegeResults;
    readonly listSpec: ListSpecResults;
}
