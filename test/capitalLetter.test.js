/* eslint-disable no-undef */

const capitalLetter = require('../src/capitalLetter');

test('Returns string with first letter capitalized', () => {
  expect(capitalLetter('hello there')).toBe('Hello there');
});
