/* eslint-disable no-undef */
const convert = require('./convert');

it('should convert quotation 4 and quantity 4', () => {
  expect(convert.convert(4, 3)).toBe(12);
});

it('should convert quotation 0 and quantity 5', () => {
  expect(convert.convert(0, 5)).toBe(0);
});

it('should convert to float', () => {
  expect(convert.toMoney(2)).toBe('2.00');
});

it('should convert string', () => {
  expect(convert.toMoney('2')).toBe('2.00');
});
