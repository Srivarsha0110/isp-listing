import axios from 'axios';

const API_URL = 'https://example.com/api/isp?type=json&query=list_isp';

export const fetchProviders = () => {
  return axios.get(API_URL);
};