/* eslint-disable no-undef */

const ceaser = require('../src/caesar_cipher');

test('It should return "Pm zol ohk zvtlaopun jvumpkluaphs av zhf" string', () => {
  expect(ceaser('If she had something confidential to say', 7)).toBe('Pm zol ohk zvtlaopun jvumpkluaphs av zhf');
});

test('It should return "VYBOW SZCEW myxpsnoxdskv dy cki" string', () => {
  expect(ceaser('LOREM IPSUM confidential to say', 10)).toBe('VYBOW SZCEW myxpsnoxdskv dy cki');
});

test('It should return "ZCFSA WDGIA !..//\\ qcbtwrsbhwoz hc gom" string', () => {
  expect(ceaser('LOREM IPSUM !..//\\ confidential to say', 40)).toBe('ZCFSA WDGIA !..//\\ qcbtwrsbhwoz hc gom');
});
