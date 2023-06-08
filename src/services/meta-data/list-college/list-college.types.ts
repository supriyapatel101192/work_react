export type CollegeResult = {
  id: number;
  collegeName: string;
}
export type CollegeData = {
  count : number;
  isNext: boolean;
  isPrev: boolean;
  nextPage: number;
  pages: number;
  prevPage: number;
  results: CollegeResult[];
}
export type ListCollegeTransportType = {
  data: CollegeData;
  is_error: boolean;
};

export type CollegeResultInfo = {
  id: number;
  collegeName: string;
}
export type CollegeInfo = {
  count : number;
  isNext: boolean;
  isPrev: boolean;
  nextPage: number;
  pages: number;
  prevPage: number;
  results: CollegeResultInfo[];
}
export type ListCollegeResult= {
  count : number;
  isNext: boolean;
  isPrev: boolean;
  nextPage: number;
  pages: number;
  prevPage: number;
  collegeData: CollegeResult[];
  collegeInfo: CollegeResultInfo[];
  isError: boolean;
};
