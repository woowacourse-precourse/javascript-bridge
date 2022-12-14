const Validator = require('../src/Validator');
const ErrorMessages = require('../src/ErrorMessages');

describe('다리 길이 유효성 검사', () => {
  test.each([['a'], ['ㄱ'], ['$']])(
    '사용자가 다리의 길이로 문자인 %s를 입력하면 예외처리',
    size => {
      expect(() => {
        Validator.checkBridgeSize(size);
      }).toThrow(ErrorMessages.NOT_NUMBER);
    },
  );

  test.each([['1'], ['22'], ['-3']])(
    '사용자가 다리의 길이로 유효하지 않은 숫자 %s를 입력하면 예외처리',
    size => {
      expect(() => {
        Validator.checkBridgeSize(size);
      }).toThrow(ErrorMessages.INVALID_SIZE);
    },
  );

  test.each([['1'], ['1e'], ['u']])(
    '사용자가 대문자 U 또는 D를 입력하지 않고 %s를 입력하면 예외처리',
    size => {
      expect(() => {
        Validator.checkUserMoving(size);
      }).toThrow(ErrorMessages.INVALID_MOVE);
    },
  );

  test.each([['1'], ['1e'], ['r']])(
    '사용자가 대문자 R 또는 Q를 입력하지 않고 %s를 입력하면 예외처리',
    size => {
      expect(() => {
        Validator.checkRestartOrQuit(size);
      }).toThrow(ErrorMessages.INVALID_COMMAND);
    },
  );
});
