const Validate = require("../src/Validate");

describe("Validate Object Test", () => {
  test("숫자가 아닌 값을 넣으면 에러를 반환한다.", () => {
    expect(() => Validate.isNumber("1a")).toThrow("[ERROR]");
  });

  test("입력된 값이 20을 넘는 경우 에러를 반환한다.", () => {
    expect(() => Validate.isBigger("21")).toThrow("[ERROR]");
  });

  test("입력된 값이 3보다 작은 경우 에러를 반환한다.", () => {
    expect(() => Validate.isLower("2")).toThrow("[ERROR]");
  });

  test("입력된 값이 U 또는 D가 아닌 경우 에러를 반환한다.", () => {
    expect(() => Validate.isCorrectMove("A")).toThrow("[ERROR]");
  });

  test("입력된 값이 R 또는 Q가 아닌 경우 에러를 반환한다.", () => {
    expect(() => Validate.isCorrectRetry("B")).toThrow("[ERROR]");
  });
});
