const MoveCheck = require("../src/Check/MoveCheck");

describe("다리 이동 입력 테스트", () => {
  test("다리 이동 U 입력 시 통과", () => {
    expect(() => new MoveCheck("U")).not.toThrow("[ERROR]");
  });

  test("다리 이동 D 입력 시 통과", () => {
    expect(() => new MoveCheck("D")).not.toThrow("[ERROR]");
  });

  test("다리 이동 숫자 입력 시 에러", () => {
    expect(() => new MoveCheck("2.7")).toThrow("[ERROR]");
  });

  test("다리 이동 다른 문자 입력 시 에러", () => {
    expect(() => new MoveCheck("a")).toThrow("[ERROR]");
  });

  test("다리 이동 다른 문자 입력 시 에러", () => {
    expect(() => new MoveCheck("가")).toThrow("[ERROR]");
  });
});
