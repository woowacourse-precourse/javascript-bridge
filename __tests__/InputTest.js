const Validate = require("../src/Model/Validate");
const { ERROR_MESSAGE } = require("../src/Utils/Constants");

describe("[입력 테스트]", () => {
  test.each([["3"], ["10"], ["20"]])(
    "다리 길이를 3 이상 20 이하의 숫자로 올바른 값을 입력한 경우",
    (input) => {
      const validate = new Validate();
      const errorMsg = validate.checkBridgeSize(input);

      expect(errorMsg).toBeNull();
    }
  );

  test.each([["1"], ["-100"], ["21"]])(
    "다리 길이에 3 이상 20 이하의 숫자 범위를 벗어난 입력이 들어오는 경우",
    (input) => {
      const validate = new Validate();
      let errorMsg = validate.checkBridgeSize(input);

      errorMsg = String(errorMsg).replace("Error: ", "");
      expect(String(errorMsg)).toBe(ERROR_MESSAGE.BRIDGE_SIZE_RANGE);
    }
  );

  test.each([["1t5"], ["two"], ["NaN"]])(
    "다리 길이에 숫자가 아닌 문자 입력이 들어오는 경우",
    (input) => {
      const validate = new Validate();
      let errorMsg = validate.checkBridgeSize(input);

      errorMsg = String(errorMsg).replace("Error: ", "");
      expect(String(errorMsg)).toBe(ERROR_MESSAGE.BRIDGE_SIZE_IS_NAN);
    }
  );

  test.each([["U"], ["D"]])(
    "이동하려는 칸을 U(위 칸)와 D(아래 칸) 중 하나의 문자인 올바른 값을 입력한 경우",
    (input) => {
      const validate = new Validate();
      const errorMsg = validate.checkMovingDirection(input);

      expect(errorMsg).toBeNull();
    }
  );

  test.each([["UPPER"], ["111"], ["UP"], ["21"], ["*-+"]])(
    "이동하려는 칸에 올바른 입력이 들어오지 않는 경우",
    (input) => {
      const validate = new Validate();
      let errorMsg = validate.checkMovingDirection(input);

      errorMsg = String(errorMsg).replace("Error: ", "");
      expect(String(errorMsg)).toBe(ERROR_MESSAGE.MOVING_DIRECTION);
    }
  );

  test.each([["R"], ["Q"]])(
    "게임 재시작/종료 여부를 R(재시작)과 Q(종료) 중 하나의 문자인 올바른 값을 입력한 경우",
    (input) => {
      const validate = new Validate();
      const errorMsg = validate.checkGameCommand(input);

      expect(errorMsg).toBeNull();
    }
  );

  test.each([["STOP"], ["N"], ["GO"], ["456"]])(
    "게임 재시작/종료 여부에 올바른 입력이 들어오지 않는 경우",
    (input) => {
      const validate = new Validate();
      let errorMsg = validate.checkGameCommand(input);

      errorMsg = String(errorMsg).replace("Error: ", "");
      expect(String(errorMsg)).toBe(ERROR_MESSAGE.GAME_COMMAND);
    }
  );
});
