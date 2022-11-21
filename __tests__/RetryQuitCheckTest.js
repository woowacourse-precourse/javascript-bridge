const RetryQuitCheck = require("../src/Check/RetryQuitCheck");

describe("게임 재시도 혹은 종료 입력 테스트", () => {
  test("게임 재시도 혹은 종료 R 입력 시 통과", () => {
    expect(() => new RetryQuitCheck("R")).not.toThrow("[ERROR]");
  });

  test("게임 재시도 혹은 종료 Q 입력 시 통과", () => {
    expect(() => new RetryQuitCheck("Q")).not.toThrow("[ERROR]");
  });

  test("게임 재시도 혹은 종료 숫자 입력 시 에러", () => {
    expect(() => new RetryQuitCheck("2.7")).toThrow("[ERROR]");
  });

  test("게임 재시도 혹은 종료 다른 문자 입력 시 에러", () => {
    expect(() => new RetryQuitCheck("a")).toThrow("[ERROR]");
  });

  test("게임 재시도 혹은 종료 다른 문자 입력 시 에러", () => {
    expect(() => new RetryQuitCheck("가")).toThrow("[ERROR]");
  });
});
