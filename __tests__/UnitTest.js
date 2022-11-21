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

  test("3: (player move) 이동값이 U나 D가 아닐 경우 예외 발생", () => {
    expect(() => {
      Check.moveFormat("Y");
    }).toThrow(ABOUT.BRIDGE_ELEMENT);
  });

  test("4: (player select) 게임 종료 후 선택값이 R이나 Q가 아닐 경우 예외 발생", () => {
    expect(() => {
      Check.moveFormat("Y");
    }).toThrow(ABOUT.SELECT_ELEMEN);
  });
});
