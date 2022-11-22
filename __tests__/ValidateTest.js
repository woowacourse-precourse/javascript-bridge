const { ERROR_MESSAGE } = require('../src/constant/constant');
const Validator = require('../src/Validator');

describe('예외처리 테스트', () => {
  const validator = new Validator();
  test.each([['abc'], ['3t'], ['1e10'], ['a20']])(
    '다리 길이에 %s 같이 숫자가 아닌 다른 값을 입력하면 예외가 발생한다.',
    (size) => {
      expect(() => {
        validator.checkNumber(size);
      }).toThrow(ERROR_MESSAGE.INVALID_SIZE_NUMBER);
    }
  );

  test.each([['05'], ['010']])(
    '다리 길이에 %s 같이 0으로 시작하는 숫자를 입력하면 예외가 발생한다.',
    (size) => {
      expect(() => {
        validator.checkStartNumber(size);
      }).toThrow(ERROR_MESSAGE.START_ZERO);
    }
  );

  test.each([['25'], ['2']])(
    '다리 길이에 %s 같이 범위에 맞지 않은 숫자를 입력하면 예외가 발생한다.',
    (size) => {
      expect(() => {
        validator.checkSizeRange(size);
      }).toThrow(ERROR_MESSAGE.INVALID_SIZE_RANGE);
    }
  );

  test.each([['u'], ['d'], ['UD'], ['E']])(
    '이동할 다리에 %s 같이 U나 D가 아닌 다른 값을 입력하면 예외가 발생한다.',
    (moving) => {
      expect(() => {
        validator.checkMoveValue(moving);
      }).toThrow(ERROR_MESSAGE.INVALID_MOVE_VALUE);
    }
  );

  test.each([['r'], ['q'], ['RQ'], ['U']])(
    '재시작/종료에 %s 같이 R나 Q가 아닌 다른 값을 입력하면 예외가 발생한다.',
    (command) => {
      expect(() => {
        validator.checkTryValue(command);
      }).toThrow(ERROR_MESSAGE.INVALID_TRY_VALUE);
    }
  );
});
