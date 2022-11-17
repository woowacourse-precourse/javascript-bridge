const InputView = require("../src/InputView");
const ERROR_MESSAGES = require("../src/constants/ErrorMessages");

describe("입력값 테스트", () => {
  const inputView = new InputView();

  test("다리 길이 입력값 테스트 ( 문자 )", () => {
    expect(inputView.readBridgeSize("a")).toThrow(ERROR_MESSAGES.NAN);
  });

  test("다리 길이 입력값 테스트 ( 특수문자 )", () => {
    expect(inputView.readBridgeSize("@")).toThrow(ERROR_MESSAGES.NAN);
  });
});
