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

  test("다리 길이 범위 테스트 (*3 ~ 20)", () => {
    expect(inputView.readBridgeSize("2")).toThrow(ERROR_MESSAGES.BRIDGE_SIZE);
  });

  test("다리 길이 범위 테스트 (*3 ~ 20)", () => {
    expect(inputView.readBridgeSize("21")).toThrow(ERROR_MESSAGES.BRIDGE_SIZE);
  });

  test("다리 길이 범위 테스트 (*3 ~ 20)", () => {
    expect(inputView.readBridgeSize("3")).toBeTruthy();
  });
});
