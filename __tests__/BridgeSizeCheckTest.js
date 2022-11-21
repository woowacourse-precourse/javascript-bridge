const BridgeSizeCheck = require("../src/Check/BridgeSizeCheck");

describe("다리 사이즈 입력 테스트", () => {
  test("다리 사이즈 정수 입력 시 통과", () => {
    expect(() => new BridgeSizeCheck(7)).not.toThrow("[ERROR]");
  });

  test("다리 사이즈 소수 입력 시 에러", () => {
    expect(() => new BridgeSizeCheck(3.3)).toThrow("[ERROR]");
  });

  test("다리 사이즈 문자 입력 시 에러", () => {
    expect(() => new BridgeSizeCheck("a")).toThrow("[ERROR]");
  });

  test("다리 사이즈 3-20 범위 충족 시 통과", () => {
    expect(() => new BridgeSizeCheck(3)).not.toThrow("[ERROR]");
  });

  test("다리 사이즈 3-20 범위 충족 시 통과", () => {
    expect(() => new BridgeSizeCheck(20)).not.toThrow("[ERROR]");
  });

  test("다리 사이즈 3-20 범위 벗어날 시 에러", () => {
    expect(() => new BridgeSizeCheck(1)).toThrow("[ERROR]");
  });

  test("다리 사이즈 3-20 범위 벗어날 시 에러", () => {
    expect(() => new BridgeSizeCheck(21)).toThrow("[ERROR]");
  });

  test("다리 사이즈 3-20 범위 벗어날 시 에러", () => {
    expect(() => new BridgeSizeCheck(-1)).toThrow("[ERROR]");
  });
});
