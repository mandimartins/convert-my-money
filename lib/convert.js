const convert = (quotation, quantity) => quotation * quantity;

const toMoney = value => parseFloat(value).toFixed(2);

module.exports = {
  convert,
  toMoney
};
