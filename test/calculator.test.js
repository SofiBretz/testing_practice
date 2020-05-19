/* eslint-disable no-undef */

const calculator = require('../src/calculator');

test('returns result of add method', () => {
  expect(calculator.sum(5, 5)).toBe(10);
});

test('returns result of substract method', () => {
  expect(calculator.substract(8, 4)).toBe(4);
});

test('returns result of divide method', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test('returns result of add method', () => {
  expect(calculator.multiply(10, 3)).toBe(30);
});
