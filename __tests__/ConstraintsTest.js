const { SizeConstraints } = require("../src/Constraints");

describe("제한 조건 테스트", () => {
  // checkOnlyNumber
  test("다리 길이 제한 조건 테스트", () => {
    expect(() => {
      const sizeConstraints = new SizeConstraints("3 ");
      sizeConstraints.checkOnlyNumber();
    }).toThrow("[ERROR] 숫자만 입력 가능합니다.");
  });
});
