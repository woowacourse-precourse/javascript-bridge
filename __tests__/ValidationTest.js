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
});
