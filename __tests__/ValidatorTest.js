const Validator = require('../src/controller/Validator');

const MESSAGE_EXCEPT = '입력은 예외를 발생시킨다.';
describe('Validator checkTruthy 테스트', () => {
  const input = [false, null, undefined, NaN, 0, -0, 0n, ''];

  input.forEach(inputValue => {
    test(`${inputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkTruthy(inputValue)).toThrow('[ERROR]');
    });
  });
});

describe('Validator checkStringType 테스트', () => {
  const input = [1, {}, [], null, undefined, NaN, true, false];

  input.forEach(inputValue => {
    test(`${typeof inputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkStringType(inputValue)).toThrow('[ERROR]');
    });
  });
});

describe('Validator checkStringIncludesNumbers 테스트', () => {
  const input = ['', '{}', '[]', 'null', 'a1a', '1a1'];

  input.forEach(inputValue => {
    test(`${inputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkStringIncludesNumbers(inputValue)).toThrow('[ERROR]');
    });
  });
});

describe('Validator checkBridgeSizeRange 테스트', () => {
  const input = [-0, 0, 1, 2, 21, 22, 10000000000000];

  input.forEach(inputValue => {
    test(`${inputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkBridgeSizeRange(inputValue)).toThrow('[ERROR]');
    });
  });
});
