const { ERROR_MSG } = require('../src/Constant');
const Validator = require('../src/Validator');

describe('유효성 검사 테스트', () => {
  test('숫자 이외의 값이 들어오면 예외가 발생한다.', () => {
    const validInput1 = '1';
    const validInput2 = 30;
    const invalidInput = /\D+/;
    expect(() => {
      Validator.validateNumber(validInput1);
    }).not.toThrow();
    expect(() => {
      Validator.validateNumber(validInput2);
    }).not.toThrow();
    expect(() => {
      Validator.validateNumber(invalidInput);
    }).toThrow(ERROR_MSG.prefix + ERROR_MSG.isNotANumber);
  });
});
