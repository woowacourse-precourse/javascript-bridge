const BridgeSizeValidation = require("../src/Validation/BridgeSizeValidation");
const MovingValidation = require("../src/validation/MovingValidation");
const GameCommandValidation = require("../src/validation/GameCommandValidation");

describe("BridgeSizeValidation 객체 테스트", () => {
  test("입력받은 다리 길이의 유효성을 검증하여 예외를 발생시킨다.", () => {
    expect(() => BridgeSizeValidation.validateBridgeSize(NaN)).toThrow();
    expect(() => BridgeSizeValidation.validateBridgeSize(1)).toThrow();
    expect(() => BridgeSizeValidation.validateBridgeSize(3.14)).toThrow();
    expect(() => BridgeSizeValidation.validateBridgeSize(5)).not.toThrow();
  });
});

describe("MovingValidation 객체 테스트", () => {
  test("입력받은 이동할 칸의 유효성을 검증하여 예외를 발생시킨다.", () => {
    expect(() => MovingValidation.validateMoving("u")).toThrow();
    expect(() => MovingValidation.validateMoving("D")).not.toThrow();
    expect(() => MovingValidation.validateMoving("2")).toThrow();
  });
});

describe("GameCommandValidation 객체 테스트", () => {
  test("입력받은 재시도 여부의 유효성을 검증하여 예외를 발생시킨다.", () => {
    expect(() => GameCommandValidation.validateGameCommand("r")).toThrow();
    expect(() => GameCommandValidation.validateGameCommand("Q")).not.toThrow();
    expect(() => GameCommandValidation.validateGameCommand("2")).toThrow();
  });
});
