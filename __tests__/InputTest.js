const InputView = require("../src/InputView");
const ERROR_MESSAGES = require("../src/constants/ErrorMessages");

describe("입력값 테스트", () => {
  test("다리 길이 입력값 테스트 ( 문자 )", () => {
    expect(() => {
      InputView.validateBridgeSize("a");
    }).toThrow(ERROR_MESSAGES.NAN);
  });

  test("다리 길이 입력값 테스트 ( 특수문자 )", () => {
    expect(() => {
      InputView.validateBridgeSize("@");
    }).toThrow(ERROR_MESSAGES.NAN);
  });

  test("다리 길이 범위 테스트 (*3 ~ 20)", () => {
    expect(() => {
      InputView.validateBridgeSize("2");
    }).toThrow(ERROR_MESSAGES.SIZE);
  });

  test("다리 길이 범위 테스트 (*3 ~ 20)", () => {
    expect(() => {
      InputView.validateBridgeSize("21");
    }).toThrow(ERROR_MESSAGES.SIZE);
  });

  test("다리 길이 범위 테스트 (*3 ~ 20)", () => {
    expect(() => {
      InputView.validateBridgeSize("3");
    }).toBeTruthy();
  });
});
