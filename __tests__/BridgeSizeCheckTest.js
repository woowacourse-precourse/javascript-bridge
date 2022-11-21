const BridgeSizeCheck = require("../src/Check/BridgeSizeCheck");

describe("다리 사이즈 입력 테스트", () => {
  test.each([[7], [3], [20]])("다리 사이즈 정상 입력 (3-20 사이 정수)", input => {
    expect(() => new BridgeSizeCheck(input)).not.toThrow();
  });

  test.each([3.3, "a", 2, 21, -1])("다리 사이즈 비정상 입력 (소수, 문자, 3-20 이외 정수)", input => {
    expect(() => new BridgeSizeCheck(input)).toThrow();
  });
});
