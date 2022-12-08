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
});
