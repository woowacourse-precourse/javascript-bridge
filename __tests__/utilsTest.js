const { BridgeSize, MoveInput, CommandInput } = require("./Constraints");

describe("제한 조건 테스트", () => {
  test("다리 길이 입력시 유효성 검사 진행 여부 테스트", () => {
    expect(() => {
      new BridgeSize("3 ");
    }).toThrow("[ERROR] 숫자만 입력 가능합니다.");
  });

  test("다리 길이 입력시 number 타입 변환 테스트", () => {
    const bridgeSize = new BridgeSize("3");
    const size = bridgeSize.makeStringToNumber();

    expect(size).toBe(3);
  });

  test("움직임 입력값 유효성 검사 진행 여부 테스트", () => {
    expect(() => {
      new MoveInput("A");
    }).toThrow("[ERROR] U 혹은 D만 입력 가능합니다.");
  });

  test("게임 커맨드 유효성 검사 진행 여부 테스트", () => {
    expect(() => {
      new CommandInput("U");
    }).toThrow("[ERROR] R 혹은 Q만 입력 가능합니다.");
  });
});
