const {
  bridgeLengthValidate,
  userMoveInput,
  gameRestartInput,
} = require("../src/utils/inputValidate");

describe("입력 예외 테스트", () => {
  test("다리 길이 예외 테스트", () => {
    expect(bridgeLengthValidate(1)).toBe(true);
    expect(bridgeLengthValidate(3)).toBe(false);
    expect(bridgeLengthValidate(20)).toBe(false);
  });
  test("사용자 이동 예외 테스트", () => {
    expect(userMoveInput("A")).toBe(true);
    expect(userMoveInput("a")).toBe(true);
    expect(userMoveInput("D")).toBe(false);
    expect(userMoveInput("d")).toBe(true);
    expect(userMoveInput("U")).toBe(false);
  });
  test("게임 종료 예외 테스트", () => {
    expect(gameRestartInput("a")).toBe(true);
    expect(gameRestartInput("R")).toBe(false);
    expect(gameRestartInput("r")).toBe(true);
    expect(gameRestartInput("Q")).toBe(false);
    expect(gameRestartInput("123")).toBe(true);
  });
});
