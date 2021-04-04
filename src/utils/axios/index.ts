import http, { AxiosResponse } from 'axios';
import { Axios, ThenResult } from './typing';

http.interceptors.request.use(config => {
  const authorization = '111';
  if (authorization) {
    config.headers.authorization = authorization;
  }
  return config;
});

const getFn = (
  url: string,
  params?: object
): Promise<AxiosResponse<ThenResult>> => {
  return http.get(url, { params: params });
};

const postFn = (
  url: string,
  params?: object
): Promise<AxiosResponse<ThenResult>> => {
  return http.post(url, params);
};

const axios: Axios = {
  get: getFn,
  post: postFn
};

export default axios;
