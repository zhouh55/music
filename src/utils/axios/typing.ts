import { AxiosResponse } from 'axios';
export type ThenResult = {
  code: number;
  data?: object | [] | string | number;
  message: string;
};

export type Axios = {
  get: (url: string, params?: object) => Promise<AxiosResponse<ThenResult>>;
  post: (url: string, params?: object) => Promise<AxiosResponse<ThenResult>>;
};
