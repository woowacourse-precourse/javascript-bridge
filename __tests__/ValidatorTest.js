const validator = require("../src/Validator");
const gameConfig = require("../src/util/GameConfig");

describe("입력값 유효성 테스트", () => {
  test("다리 길이는 숫자로 입력되어야 한다.", () => {
    expect(() => {
      validator.isNotANumber("a");
    }).toThrow();
  });
  test("다리 길이는 숫자로 입력되어야 한다.", () => {
    expect(() => {
      validator.isNotANumber("A");
    }).toThrow();
  });

  test(`다리 길이는 ${gameConfig.MIN_IN_RANGE}이상 ${gameConfig.MAX_IN_RANGE}이하 이다.`, () => {
    expect(() => {
      validator.isRangeIn(gameConfig.MIN_IN_RANGE, gameConfig.MAX_IN_RANGE, 2);
    }).toThrow();
  });
  test(`다리 길이는 ${gameConfig.MIN_IN_RANGE}이상 ${gameConfig.MAX_IN_RANGE}이하 이다.`, () => {
    expect(() => {
      validator.isRangeIn(gameConfig.MIN_IN_RANGE, gameConfig.MAX_IN_RANGE, 21);
    }).toThrow();
  });
  test(`다리 길이는 ${gameConfig.MIN_IN_RANGE}이상 ${gameConfig.MAX_IN_RANGE}이하 이다.`, () => {
    expect(() => {
      validator.isRangeIn(gameConfig.MIN_IN_RANGE, gameConfig.MAX_IN_RANGE, -1);
    }).toThrow();
  });

  test("이동하기 위한 입력 값은 U 또는 D이다.", () => {
    expect(() => {
      validator.isMoveInputValidate("A");
    }).toThrow();
  });
  test("이동하기 위한 입력 값은 U 또는 D이다.", () => {
    expect(() => {
      validator.isMoveInputValidate("u");
    }).toThrow();
  });
  test("이동하기 위한 입력 값은 U 또는 D이다.", () => {
    expect(() => {
      validator.isMoveInputValidate("1");
    }).toThrow();
  });

  test("재시작을 위한 입력 값은 R 또는 Q이다.", () => {
    expect(() => {
      validator.isRestartInputValidate("A");
    }).toThrow();
  });
  test("재시작을 위한 입력 값은 R 또는 Q이다.", () => {
    expect(() => {
      validator.isRestartInputValidate("r");
    }).toThrow();
  });
  test("재시작을 위한 입력 값은 R 또는 Q이다.", () => {
    expect(() => {
      validator.isRestartInputValidate("a");
    }).toThrow();
  });
});
