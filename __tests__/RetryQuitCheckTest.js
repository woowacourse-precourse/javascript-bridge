const RetryQuitCheck = require("../src/Check/RetryQuitCheck");

describe("게임 재시도 혹은 종료 입력 테스트", () => {
  test.each(["R", "Q"])("게임 재시도 혹은 종료 정상 입력 (R 혹은 Q)", input => {
    expect(() => new RetryQuitCheck(input)).not.toThrow("[ERROR]");
  });

  test.each(["2.7", "a", "가"])("게임 재시도 혹은 종료 비정상 입력(2.7, a, 가)", input => {
    expect(() => new RetryQuitCheck(input)).toThrow("[ERROR]");
  });
});
