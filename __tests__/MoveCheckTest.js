const MoveCheck = require("../src/Check/MoveCheck");

describe("다리 이동 입력 테스트", () => {
  test.each(["U", "D"])("다리 이동 정상 입력 (U 혹은 D)", input => {
    expect(() => new MoveCheck(input)).not.toThrow("[ERROR]");
  });

  test.each(["2.7", "a", "가"])("다리 이동 비정상 입력 (2.7, a, 가)", input => {
    expect(() => new MoveCheck(input)).toThrow("[ERROR]");
  });
});
