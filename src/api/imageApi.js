const axios = require('axios');

const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
const getList = async () => {
  return axios.get(url);
};

module.exports = {
  getList,
};
