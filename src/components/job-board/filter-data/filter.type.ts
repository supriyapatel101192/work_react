import { FilterJobsResult } from '../../../services/job-board/list-jobs/list-jobs.types';

export type FilterProps = {
    isOpen: boolean,
    toggle: () => void;
    filterHandleData: (e: any) => void;
    filterJobData: FilterJobsResult;
}
