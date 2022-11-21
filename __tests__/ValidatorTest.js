const { ERROR_MSG } = require('../src/Constant');
const Validator = require('../src/Validator');
const { validateNumber, validateNumberRange, validateMove, validateRetry } =
  Validator;
const { prefix, isNotANumber, isOutOfRange, isNotUpOrDown, isNotRetryOrQuit } =
  ERROR_MSG;

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

  test('라운드마다 U와 D 이외의 값이 입력될 경우 예외가 발생한다.', () => {
    const validInput1 = 'U';
    const validInput2 = 'D';
    const invalidInput1 = /[^UD]/;
    const invalidInput2 = 'UU';
    const invalidInput3 = 'UD';
    const invalidInput4 = 'UaagD';
    expect(() => {
      validateMove(validInput1);
    }).not.toThrow();
    expect(() => {
      validateMove(validInput2);
    }).not.toThrow();
    expect(() => {
      validateMove(invalidInput1);
    }).toThrow(prefix + isNotUpOrDown);
    expect(() => {
      validateMove(invalidInput2);
    }).toThrow(prefix + isNotUpOrDown);
    expect(() => {
      validateMove(invalidInput3);
    }).toThrow(prefix + isNotUpOrDown);
    expect(() => {
      validateMove(invalidInput4);
    }).toThrow(prefix + isNotUpOrDown);
  });

  test('게임 재시작시 R과 Q 이외의 값이 입력되면 예외가 발생한다.', () => {
    const validInput1 = 'R';
    const validInput2 = 'Q';
    const invalidInput1 = /[^RQ]/;
    const invalidInput2 = 'RR';
    const invalidInput3 = 'QR';
    const invalidInput4 = 'UaagD';
    expect(() => {
      validateRetry(validInput1);
    }).not.toThrow();
    expect(() => {
      validateRetry(validInput2);
    }).not.toThrow();
    expect(() => {
      validateRetry(invalidInput1);
    }).toThrow(prefix + isNotRetryOrQuit);
    expect(() => {
      validateRetry(invalidInput2);
    }).toThrow(prefix + isNotRetryOrQuit);
    expect(() => {
      validateRetry(invalidInput3);
    }).toThrow(prefix + isNotRetryOrQuit);
    expect(() => {
      validateRetry(invalidInput4);
    }).toThrow(prefix + isNotRetryOrQuit);
  });
});
