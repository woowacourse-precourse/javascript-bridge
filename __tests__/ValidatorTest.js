const Validator = require("../src/Validator");

describe("유효성 검증 테스트", () => {
  test("다리로 이동할 때 검증", () => {
    expect(() => Validator.moveValidate("d")).toThrow("[ERROR]");
  });
  test("다리로 이동할 때 검증", () => {
    expect(() => Validator.moveValidate("1")).toThrow("[ERROR]");
  });

  test("게임 종료 후 재시도, 게임 종료 선택 검증", () => {
    expect(() => Validator.endValidate("r")).toThrow("[ERROR]");
    expect(() => Validator.endValidate("q")).toThrow("[ERROR]");
  });
});
