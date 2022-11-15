// Base configuration for axios
import axios from "axios";

const baseUrl = "https://bespoke.trustbancgroup.com/omnichannel_interview/api/";

export const axiosData = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

// Intercept all Requests and use the apiKey
axiosData.interceptors.request.use((config) => {
  config.headers.auth = "";
  return config;
});

// Intercept all Responses and handle non-200 response.
axiosData.interceptors.response.use((response, error) => {
  if (response) {
    return response.data;
  }

  if (error) {
    if (error?.response?.status === 401) {
      window.href = "/";
    }
  }

  return response || error;
});

export const cytest = () => {};
