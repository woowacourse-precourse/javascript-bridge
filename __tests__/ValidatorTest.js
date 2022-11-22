const { ERROR_MSG } = require('../src/common/Constant');
const Validator = require('../src/utils/Validator');
const { validateNumber, validateNumberRange, validateMove, validateRetry } =
  Validator;
const { prefix, isNotANumber, isOutOfRange, isNotUpOrDown, isNotRetryOrQuit } =
  ERROR_MSG;

describe('유효성 검사 테스트', () => {
  test.each([1, 32])(
    '숫자가 들어오면 들어오면 예외가 발생하지 않는다.',
    (number) => {
      expect(() => {
        validateNumber(number);
      }).not.toThrow();
    }
  );

  test('숫자 이외의 값이 들어오면 예외가 발생한다.', () => {
    const invalidInput = /\D+/;
    expect(() => {
      validateNumber(invalidInput);
    }).toThrow(prefix + isNotANumber);
  });

  test.each([2, 21, 30])(
    '3 미만, 20 초과 값이 들어오면 예외가 발생한다.',
    (number) => {
      expect(() => {
        validateNumberRange(number);
      }).toThrow(prefix + isOutOfRange);
    }
  );

  test.each([3, 10, 20])(
    '3 이상, 20 이하 값이 들어오면 예외가 발생하지 않는다.',
    (number) => {
      expect(() => {
        validateNumberRange(number);
      }).not.toThrow();
    }
  );

  test.each([/[^UD]/, 'UU', 'UD', 'UaagD'])(
    '라운드마다 U와 D 이외의 값이 입력될 경우 예외가 발생한다.',
    (str) => {
      expect(() => {
        validateMove(str);
      }).toThrow(prefix + isNotUpOrDown);
    }
  );

  test.each(['U', 'D'])(
    '라운드마다 U와 D가 입력될 경우 예외가 발생하지 않는다.',
    (str) => {
      expect(() => {
        validateMove(str);
      }).not.toThrow();
    }
  );

  test.each([/[^RQ]/, 'RR', 'QR', 'UaagD'])(
    '게임 재시작시 R과 Q 이외의 값이 입력되면 예외가 발생한다.',
    (str) => {
      expect(() => {
        validateRetry(str);
      }).toThrow(prefix + isNotRetryOrQuit);
    }
  );

  test.each(['R', 'Q'])(
    '게임 재시작시 R 또는 Q가 입력되면 예외가 발생하지 않는다.',
    (str) => {
      expect(() => {
        validateRetry(str);
      }).not.toThrow();
    }
  );
});
