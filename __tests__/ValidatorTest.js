const { ERROR_MSG } = require('../src/Constant');
const Validator = require('../src/Validator');
const { validateNumber, validateNumberRange } = Validator;
const { prefix, isNotANumber, isOutOfRange } = ERROR_MSG;

describe('유효성 검사 테스트', () => {
  test('숫자 이외의 값이 들어오면 예외가 발생한다.', () => {
    const validInput1 = '1';
    const validInput2 = 30;
    const invalidInput = /\D+/;
    expect(() => {
      validateNumber(validInput1);
    }).not.toThrow();
    expect(() => {
      validateNumber(validInput2);
    }).not.toThrow();
    expect(() => {
      validateNumber(invalidInput);
    }).toThrow(prefix + isNotANumber);
  });
  test('3 미만, 20 초과 값이 들어오면 예외가 발생한다.', () => {
    const validNumber1 = 3;
    const validNumber2 = 20;
    const invalidNumber1 = 2;
    const invalidNumber2 = 21;
    expect(() => {
      validateNumberRange(validNumber1);
    }).not.toThrow();
    expect(() => {
      validateNumberRange(validNumber2);
    }).not.toThrow();
    expect(() => {
      validateNumberRange(invalidNumber1);
    }).toThrow(prefix + isOutOfRange);
    expect(() => {
      validateNumberRange(invalidNumber2);
    }).toThrow(prefix + isOutOfRange);
  });
});
