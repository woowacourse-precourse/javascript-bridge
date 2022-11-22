const Validation = require("../src/Utils/Validation");

describe('다리 길이 입력 예외 테스트', () => {

  test.each([['?'], ['3.5'], ['21']])(
    '숫자가 아닌 문자를 입력한 경우, 정수가 아닌 실수를 입력한 경우, 범위를 벗어난 숫자를 입력한 경우',
    (inputBridgeSize) => {
      expect(() => {
        Validation.checkBridgeSize(inputBridgeSize);
      }).toThrow('[ERROR]');
    }
  );
});