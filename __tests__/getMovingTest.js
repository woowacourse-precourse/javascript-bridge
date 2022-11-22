const Validation = require("../src/Utils/Validation");

describe('이동할 칸 입력 예외 테스트(U 또는 D가 아닌 다른 문자 입력)', () => {

  test.each([['u'], ['?'], ['5']])(
    '소문자 u를 입력한 경우, 특수문자를 입력한 경우, 숫자를 입력한 경우',
    (inputMoving) => {
      expect(() => {
        Validation.checkMoving(inputMoving);
      }).toThrow('[ERROR]');
    }
  );
});