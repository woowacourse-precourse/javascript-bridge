const BridgeSizeValidation = require("../src/validation/BridgeSizeValidation");
const MovingValidation = require("../src/validation/MovingValidation");
const RetryValidation = require("../src/validation/RetryValidation");

describe("BridgeSize 유효성 검사 테스트", () => {
  test.each([["a"], ["3.1"], ["2"], ["21"]])(
    "잘못된 size input에 대한 예외처리",
    () => {
      expect((input) => {
        new BridgeSizeValidation(input);
      }).toThrow("[ERROR]");
    }
  );
});

describe("Moving 유효성 검사 테스트", () => {
  test.each([["1"], ["a"], ["A"], ["u"], ["d"]])(
    "잘못된 moving input에 대한 예외처리",
    () => {
      expect((input) => {
        new MovingValidation(input);
      }).toThrow("[ERROR]");
    }
  );
});

describe("retry 유효성 검사 테스트", () => {
  test.each([["1"], ["a"], ["A"], ["r"], ["q"]])(
    "잘못된 retry input에 대한 예외처리",
    () => {
      expect((input) => {
        new RetryValidation(input);
      }).toThrow("[ERROR]");
    }
  );
});
