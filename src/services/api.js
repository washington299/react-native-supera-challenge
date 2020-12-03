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
  filterByPrice: async (endpoint) => {
    const { data } = await api(endpoint);
    const games = data;
    const res = games.sort((a, b) => {
      if (a.price < b.price) { return -1; }
      if (a.price > b.price) { return 1; }
      return 0;
    });
    return res;
  },
  filterByScore: async (endpoint) => {
    const { data } = await api(endpoint);
    const games = data;
    const res = games.sort((a, b) => {
      if (a.score < b.score) { return 1; }
      if (a.score > b.score) { return -1; }
      return 0;
    });
    return res;
  },
  filterByAlphaAsc: async (endpoint) => {
    const { data } = await api(endpoint);
    const games = data;
    const res = games.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
    return res;
  },
};

export default Api;
