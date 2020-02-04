/* eslint-disable no-restricted-globals */
const apiBCB = require('../lib/api-bcb');

const getIndex = async (req, res) => {
  const cotacao = await apiBCB.getCotacao();
  res.render('home', {
    cotacao
  });
};

module.exports = {
  getIndex
};
