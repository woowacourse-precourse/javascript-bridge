const { SizeConstraints } = require("../src/Constraints");

describe("제한 조건 테스트", () => {
  test("숫자가 아닌 다리 길이 입력값 테스트", () => {
    expect(() => {
      const sizeConstraints = new SizeConstraints("3 ");
      sizeConstraints.checkOnlyNumber();
    }).toThrow("[ERROR] 숫자만 입력 가능합니다.");
  });

  test("범위 외 다리 길이 입력값 테스트", () => {
    expect(() => {
      const sizeConstraints = new SizeConstraints("1");
      sizeConstraints.checkNumberRange();
    }).toThrow("[ERROR] 다리 길이는 3 이상 20 이하만 가능합니다.");
  });
});
