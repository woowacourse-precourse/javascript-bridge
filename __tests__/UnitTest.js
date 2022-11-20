const Check = require("../src/utils/Check");
const { ABOUT } = require("../src/constants/Message");

describe("Input 테스트", () => {
  test("1: (bridge size) 입력값 타입이 숫자가 아닐 경우 예외 발생", () => {
    expect(() => {
      Check.bridgeLength(["a"]);
    }).toThrow(ABOUT.TYPE_NUMBER);
  });

  test("2: (bridge size) 입력값이 범위(3 ~ 20) 밖일 경우 예외 발생", () => {
    expect(() => {
      Check.bridgeLength([1]);
    }).toThrow(ABOUT.NUMBER_RANGE);
  });
});
