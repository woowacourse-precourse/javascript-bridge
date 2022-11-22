const Validator = require("../src/utils/Validation");

describe("ValidationTest", () => {
  test.each([[2], [-1], [25]])(
    "입력한 다리의 길이가 허용 범위에 맞지 않으면 예외처리",
    (input) => {
      expect((input) => {
        Validator.validateBridgeSize(input);
      }).toThrow("[ERROR]");
    }
  );
  test.each([[" "], ["a"], [""]])(
    "입력한 다리의 길이가 숫자가 아닌경우 예외처리",
    (input) => {
      expect((input) => {
        Validator.validateBridgeSize(input);
      }).toThrow("[ERROR]");
    }
  );
  test.each([["r"], ["q"], ["1"]])(
    "재시작/종료입력에 R또는 Q가 아닌 입력이 발생할 경우 예외처리",
    (input) => {
      expect((input) => {
        Validator.validateRestartOrQuit(input);
      }).toThrow("[ERROR]");
    }
  );
});
