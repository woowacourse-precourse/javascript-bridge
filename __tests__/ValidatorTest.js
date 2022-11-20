const Validator = require('../src/Validator');

test('문자에 공백이 포함되어 있다면 예외가 발생한다.', () => {
  const inputValues = [' ', ' 3', '12 ', '3 4'];
  inputValues.forEach((inputValue) => {
    expect(() => Validator.throwErrorIfHasBlank(inputValue)).toThrow('[ERROR]');
  });
});

describe('다리 길이에 대한 예외 테스트', () => {
  test('문자에 공백이 포함되어 있다면 예외가 발생한다.', () => {
    const inputValues = [' ', ' 3', '12 ', '3 4'];
    inputValues.forEach((inputValue) => {
      expect(() => Validator.throwErrorIfHasBlank(inputValue)).toThrow(
        '[ERROR]'
      );
    });
  });

  test('숫자가 아니라면 예외가 발생한다.', () => {
    const inputValues = ['잉', '#', 'number', '1e3'];
    inputValues.forEach((inputValue) => {
      expect(() => Validator.sizeValidityCheck(inputValue)).toThrow('[ERROR]');
    });
  });

  test('3에서 20까지의 수가 아니라면 예외가 발생한다.', () => {
    const inputValues = ['2', '21', '-22', '1000'];
    inputValues.forEach((inputValue) => {
      expect(() => Validator.sizeValidityCheck(inputValue)).toThrow('[ERROR]');
    });
  });
});

describe('방향에 대한 예외 테스트', () => {
  test('문자에 공백이 포함되어 있다면 예외가 발생한다.', () => {
    const inputValues = [' ', ' 3', '12 ', '3 4'];
    inputValues.forEach((inputValue) => {
      expect(() => Validator.throwErrorIfHasBlank(inputValue)).toThrow(
        '[ERROR]'
      );
    });
  });

  test('대문자 U 혹은 D 가 아니라면 예외가 발생한다.', () => {
    const inputValues = ['u', 'd', 'UD', 'DU'];
    inputValues.forEach((inputValue) => {
      expect(() => Validator.directionValidityCheck(inputValue)).toThrow(
        '[ERROR]'
      );
    });
  });
});
