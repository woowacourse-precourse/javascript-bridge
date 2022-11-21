const BridgeException = require("../src/exception");

describe("BridgeException 클래스 테스트", () => {
  test.each([[3], [5], [20]])("isInvalidBridgeLength 길이 입력 예외 [성공]", (input) => {
    const bridgeSize = BridgeException.isInvalidBridgeLength(input);
    expect(bridgeSize).toBe(false);
  });

  test.each([[1], [-10], [" "], [59], ["a"], ["NaN"], ["undefined"]])(
    "isInvalidBridgeLength 길이 입력 예외 [실패]",
    (input) => {
      const bridgeSize = BridgeException.isInvalidBridgeLength(input);
      expect(bridgeSize).toBe(true);
    }
  );
  test.each([["U"], ["D"]])("isInvalidMoving  U,D 입력 예외 처리 [성공]", (input) => {
    const bridgeSize = BridgeException.isInvalidMoving(input);
    expect(bridgeSize).toBe(false);
  });

  test.each([[1], [0], [" "], ["u"], ["d"], ["NaN"], ["undefined"]])(
    "isInvalidMoving  U,D 입력 예외 처리 [실패]",
    (input) => {
      const bridgeSize = BridgeException.isInvalidMoving(input);
      expect(bridgeSize).toBe(true);
    }
  );

  test.each([["R"], ["Q"]])("isInvalidGameCommand  재시작 여부 입력 예외 처리 [성공]", (input) => {
    const bridgeSize = BridgeException.isInvalidGameCommand(input);
    expect(bridgeSize).toBe(false);
  });

  test.each([[1], [0], [" "], ["u"], ["d"], ["NaN"], ["undefined"]])(
    "isInvalidGameCommand  재시작 여부 입력 예외 처리 [실패]",
    (input) => {
      const bridgeSize = BridgeException.isInvalidGameCommand(input);
      expect(bridgeSize).toBe(true);
    }
  );
});
