import data from '../../products.json';

const Api = {
  getProducts: () => data,
  filterByPrice: () => {
    const res = data.sort((a, b) => {
      if (a.price < b.price) { return -1; }
      if (a.price > b.price) { return 1; }
      return 0;
    });
    return res;
  },
  filterByScore: () => {
    const res = data.sort((a, b) => {
      if (a.score < b.score) { return 1; }
      if (a.score > b.score) { return -1; }
      return 0;
    });
    return res;
  },
  filterByAlphaAsc: () => {
    const res = data.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
    return res;
  },
};

export default Api;
