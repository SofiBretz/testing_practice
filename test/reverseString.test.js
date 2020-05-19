/* eslint-disable no-undef */

const reverseString = require('../src/reverseString');

test('Returns reversed string', () => {
  expect(reverseString('hello there')).toBe('ereht olleh');
});
