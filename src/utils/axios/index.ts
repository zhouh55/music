import axios from 'axios';
import { ElMessage } from 'element-plus/lib';
import { getCookie } from '../cookie';

axios.interceptors.request.use(config => {
  const authorization = getCookie('token');
  if (authorization) {
    config.headers.authorization = authorization;
  }
  return config;
});

axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    ElMessage.error('服务端出错！');
    return Promise.reject(res);
  }

  if (res.data.code === 200) return res.data;

  ElMessage.error(res.data.message);
  return Promise.reject(res.data);
});

export default axios;
