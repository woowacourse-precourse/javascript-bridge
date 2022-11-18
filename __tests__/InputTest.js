const Validation = require("../src/Validation");

describe("다리 길이 player 입력 테스트", () => {
  test.each([[0], [-12], [25]])(
    "다리 길이가 유효 범위가 아닌 경우 false 반환",
    (input) => {
      expect(Validation.isValidSizeRange(input)).toBe(false);
    }
  );

  test.each([["a"], ["//"], ["@"]])(
    "다리 길이가 유효한 type이 아닌 경우 false 반환",
    (input) => {
      expect(Validation.isValidSizeType(input)).toBe(false);
    }
  );

  test.each([[11.2], [23.6], [-123.12]])(
    "다리 길이가 정수가 아닌 경우 false 반환",
    (input) => {
      expect(Validation.isValidSizeNumber(input)).toBe(false);
    }
  );
});
