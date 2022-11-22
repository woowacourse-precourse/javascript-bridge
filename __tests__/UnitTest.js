const Check = require("../src/Utils/Check");

describe("Input 테스트", () => {
  test.each([["a"], ["1"], ["21"], [""]])(
    "입력값이 3 ~ 20 사이의 숫자가 아닐 경우 예외 발생",
    (input) => {
      expect(Check.bridgeLength(input)).toBeFalsy();
    }
  );

  test.each([["a"], ["1"], ["u"], ["U "]])(
    "이동값이 U나 D가 아닐 경우 예외 발생",
    (input) => {
      expect(Check.moveFormat(input)).toBeFalsy();
    }
  );

  test.each([["a"], ["1"], ["r"], ["Q "]])(
    "선택값이 R나 Q가 아닐 경우 예외 발생",
    (input) => {
      expect(Check.selectFormat(input)).toBeFalsy();
    }
  );
});
