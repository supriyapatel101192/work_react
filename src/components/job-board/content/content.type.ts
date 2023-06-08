import { JobsResultInfo } from '../../../services/job-board/list-jobs/list-jobs.types';

export type ContentProps = {
    jobData: JobsResultInfo[];
    sidebarIsOpen: boolean;
    toggleSidebar:()=> void;
    loading: boolean;
    isNoData: boolean;
}
export type SearchParams = {
    keywords: string;
    category: string;
    location: string;
  };
