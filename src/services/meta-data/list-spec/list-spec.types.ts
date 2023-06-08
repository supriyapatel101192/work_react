export type SpecResult = {
  id: number;
  courseName: string;
}
export type SpecData = {
  count : number;
  isNext: boolean;
  isPrev: boolean;
  nextPage: number;
  pages: number;
  prevPage: number;
  results: SpecResult[];
}
export type ListSpecTransportType = {
  data: SpecData;
  is_error: boolean;
};

export type SpecResultInfo = {
  id: number;
  courseName: string;
}
export type SpecInfo = {
  count : number;
  isNext: boolean;
  isPrev: boolean;
  nextPage: number;
  pages: number;
  prevPage: number;
  results: SpecResultInfo[];
}
export type ListSpecResult= {
  count : number;
  isNext: boolean;
  isPrev: boolean;
  nextPage: number;
  pages: number;
  prevPage: number;
  specData: SpecResult[];
  specInfo: SpecResultInfo[];
  isError: boolean;
};
