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

describe.only("이동할 칸 player 입력 테스트", () => {
  test.each([["0"], ["/"], [25]])(
    "이동할 칸이 알파벳이 아닌 경우 false 반환",
    (input) => {
      expect(Validation.isValidMovingType(input)).toBe(false);
    }
  );

  test.each([[""], ["DDDD"], ["UU"]])(
    "이동할 칸은 한 개의 문자열을 입력하지 아닌 경우 false 반환",
    (input) => {
      expect(Validation.isValidMovingLength(input)).toBe(false);
    }
  );

  test.each([["U"], ["D"]])(
    "이동할 칸을 U 또는 D를 입력한 경우 true 반환",
    (input) => {
      expect(Validation.isValidMoving(input)).toBe(true);
    }
  );
});
