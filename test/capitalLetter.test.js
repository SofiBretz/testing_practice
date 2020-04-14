const capitalLetter = require('../src/capitalLetter');

test('Returns string with first letter capitalized', () => {
    expect(capitalize('hello there')).toBe('Hello there');
});