import { create } from 'apisauce';

//create an apisauce clent for server requests
const apiClient = create({
  baseURL: 'http://192.168.0.14:9000/api',
});

export default apiClient;
