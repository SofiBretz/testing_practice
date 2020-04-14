const reverseString = require('../src/reverseString');

test('Returns reversed string', () => {
  expect(reverseStr('hello there')).toBe('ereht olleh');
});