const Validator = require('../src/controller/Validator');

const MESSAGE_ACCEPT = '입력은 정상적으로 동작한다.';
const MESSAGE_EXCEPT = '입력은 예외를 발생시킨다.';
describe('Validator checkTruthy 테스트', () => {
  const validInput = [1, true, 'a', [], {}];
  validInput.forEach(validInputValue => {
    test(`${validInputValue} ${MESSAGE_ACCEPT}`, () => {
      expect(() => Validator.checkTruthy(validInputValue)).not.toThrow('[ERROR]');
    });
  });

  const inValidInput = [false, null, undefined, NaN, 0, -0, 0n, ''];
  inValidInput.forEach(invalidInputValue => {
    test(`${invalidInputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkTruthy(invalidInputValue)).toThrow('[ERROR]');
    });
  });
});

describe('Validator checkStringType 테스트', () => {
  const validInput = ['a'];
  validInput.forEach(validInputValue => {
    test(`${typeof validInputValue} ${MESSAGE_ACCEPT}`, () => {
      expect(() => Validator.checkStringType(validInputValue)).not.toThrow('[ERROR]');
    });
  });

  const inValidInput = [1, {}, [], null, undefined, NaN, true, false];
  inValidInput.forEach(invalidInputValue => {
    test(`${typeof invalidInputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkStringType(invalidInputValue)).toThrow('[ERROR]');
    });
  });
});

describe('Validator checkStringIncludesNumbers 테스트', () => {
  const validInput = ['123'];
  validInput.forEach(validInputValue => {
    test(`${validInputValue} ${MESSAGE_ACCEPT}`, () => {
      expect(() => Validator.checkStringIncludesNumbers(validInputValue)).not.toThrow('[ERROR]');
    });
  });

  const inValidInput = ['', '{}', '[]', 'null', 'a1a', '1a1'];
  inValidInput.forEach(invalidInputValue => {
    test(`${invalidInputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkStringIncludesNumbers(invalidInputValue)).toThrow('[ERROR]');
    });
  });
});

describe('Validator checkBridgeSizeRange 테스트', () => {
  const validInput = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  validInput.forEach(validInputValue => {
    test(`${validInputValue} ${MESSAGE_ACCEPT}`, () => {
      expect(() => Validator.checkBridgeSizeRange(validInputValue)).not.toThrow('[ERROR]');
    });
  });

  const inValidInput = [-0, 0, 1, 2, 21, 22, 10000000000000];
  inValidInput.forEach(invalidInputValue => {
    test(`${invalidInputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkBridgeSizeRange(invalidInputValue)).toThrow('[ERROR]');
    });
  });
});

describe('Validator checkNumberType 테스트', () => {
  const validInput = [3, 100, 100000, 0, -0, NaN];
  validInput.forEach(validInputValue => {
    test(`${typeof validInputValue} ${MESSAGE_ACCEPT}`, () => {
      expect(() => Validator.checkNumberType(validInputValue)).not.toThrow('[ERROR]');
    });
  });

  const inValidInput = [{}, [], null, undefined, true, false];
  inValidInput.forEach(invalidInputValue => {
    test(`${typeof invalidInputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkNumberType(invalidInputValue)).toThrow('[ERROR]');
    });
  });
});
