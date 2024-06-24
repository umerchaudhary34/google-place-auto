import axios, {AxiosError, AxiosResponse} from 'axios';

const API_BASE_URL = 'https://any-api-url.com';
const tokenKey = 'token';

// Add a request interceptor
axios.interceptors.request.use(async config => {
  const token = await tokenKey;
  config.headers.Authorization = token;
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // Handle errors globally
    if (error.response?.status === 401) {
      console.log('You are not authorized to access this resource.');
    }
    return Promise.reject(error);
  },
);

export const getTargetData = async () => {
  const response = await axios.get(`${API_BASE_URL}/get-target-data`);
  return response.data;
};
