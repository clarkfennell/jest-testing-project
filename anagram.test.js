const anagram = require('./anagram');

test('anagram function exist', () => {
  expect(typeof anagram).toEqual('function');
});

test('cinema is an anagram iceman', () => {
  expect(anagram('cinema', 'iceman')).toBeTruthy();
})

test('Dormitory is an anagram dirty room##', () => {
  expect(anagram('Dormitory', 'dirty room##')).toBeTruthy();
})

test('Hello is an anagram aloha', () => {
  expect(anagram('Hello', 'aloha')).toBeFalsy();
})