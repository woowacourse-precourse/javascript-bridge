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

describe("이동할 칸 player 입력 테스트", () => {
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

  test.each([["a"], ["k"]])(
    "이동할 칸을 소문자를 입력한 경우 true 반환",
    (input) => {
      expect(Validation.isValidMovingCase(input)).toBe(false);
    }
  );

  test.each([["U"], ["D"]])(
    "이동할 칸을 U 또는 D를 입력한 경우 true 반환",
    (input) => {
      expect(Validation.isValidMoving(input)).toBe(true);
    }
  );
});

describe.only("게임 재시작/종료 여부 입력 입력 테스트", () => {
  test.each([["0"], ["/"], [25]])(
    "게임 재시작/종료가 알파벳이 아닌 경우 false 반환",
    (input) => {
      expect(Validation.isValidCommandType(input)).toBe(false);
    }
  );

  test.each([[""], ["DDDD"], ["UU"]])(
    "게임 재시작/종료에 한 개의 문자열을 입력하지 아닌 경우 false 반환",
    (input) => {
      expect(Validation.isValidCommandLength(input)).toBe(false);
    }
  );

  test.each([["z"], ["y"]])(
    "게임 재시작/종료에 소문자를 입력한 경우 true 반환",
    (input) => {
      expect(Validation.isValidCommandCase(input)).toBe(false);
    }
  );

  test.each([["R"], ["Q"]])(
    "게임 재시작/종료를 R 또는 Q를 입력한 경우 true 반환",
    (input) => {
      expect(Validation.isValidCommand(input)).toBe(true);
    }
  );
});
