import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.0.16:19001',
  method: 'GET',
});

const Api = {
  getProducts: async (endpoint) => {
    const res = await api(endpoint);
    return res.data;
  },
};

export default Api;
