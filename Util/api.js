const axios = require('axios')
const api = {
  getUser:  async function (username) {
    return await axios.get(`https://api.github.com/users/${username}`)
  }
};

module.exports = api;
