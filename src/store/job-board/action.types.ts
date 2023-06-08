import { GenTokenResults } from '../../services/gen-token/gen-token.service.types';
import { JobPositionByIdResults } from '../../services/job-board/job-position-by-id/job-position-by-id.service.types';
import { ListJobsResults } from '../../services/job-board/list-jobs/list-jobs.service.types';

export type JobBoardAppState = {
    readonly genToken: GenTokenResults;
    readonly listJobs: ListJobsResults;
    readonly jobPositionById: JobPositionByIdResults;
}
