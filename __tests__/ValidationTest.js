const { ERROR } = require("../src/data/Constants");
const Validation = require("../src/Validation");
const { checkBridgeLength } = require("../src/Validation");

describe(`bridgeSize 입력값 타당성 테스트`, () => {
  test.each([["0"], ["-1"], ["21"]])(
    `유저가 3이상 20이하의 숫자를 입력했는지 확인`,
    (input) => {
      expect(() => checkBridgeLength(input)).toThrow(
        ERROR.ERROR_BRIDGE_LENGTH_RANGE
      );
    }
  );

  test.each([["a"], ["a1"], ["#3"], ["10."]])(
    `유저가 숫자만 입력 했는지 확인`,
    (input) => {
      expect(() => {
        Validation.checkBridgeLength(input);
      }).toThrow(ERROR.ERROR_BRIDGE_LENGTH_ONLY_NUM);
    }
  );
});
describe(`userMove 입력값 타당성 테스트`, () => {
  test.each([["u"], ["d"]])(
    `알파벳이 UpperCase가 아닐 때 에러발생`,
    (input) => {
      expect(() => {
        Validation.checkMove(input);
      }).toThrow(ERROR.ERROR_BRIDGE_MOVE_UPPERCASE);
    }
  );

  test.each([["#d"], ["a"], ["1d"], ["123"], ["U%"], ["D#"]])(
    `U 또는 D 가 아닌 다른 걸 입력했을 때 에러발생`,
    (input) => {
      expect(() => {
        Validation.checkMove(input);
      }).toThrow(ERROR.ERROR_BRIDGE_MOVE_RANGE);
    }
  );
  test.each([["DD"], ["UU"]])(`2글자 이상을 입력했을 때 에러발생`, (input) => {
    expect(() => {
      Validation.checkMove(input);
    }).toThrow(ERROR.ERROR_BRIDGE_MOVE_LENGTH);
  });
});

describe(`재시작 입력값 타당성 테스트`, () => {
  test.each([["r"], ["q"]])(
    `알파벳이 UpperCase가 아닐 때 에러발생`,
    (input) => {
      expect(() => {
        Validation.checkRetry(input);
      }).toThrow(ERROR.ERROR_RETRY_UPPERCASE);
    }
  );

  test.each([["a"], ["#"], ["Q."], ["R3"]])(
    `R 또는 Q가 아닌 다른 걸 입력했을 때 에러발생`,
    (input) => {
      expect(() => {
        Validation.checkRetry(input);
      }).toThrow(ERROR.ERROR_RETRY_RANGE);
    }
  );

  test.each([["RR"], ["QQ"], ["QR"], ["RQ"]])(
    `2글자 이상을 입력했을 때 에러발생`,
    (input) => {
      expect(() => {
        Validation.checkRetry(input);
      }).toThrow(ERROR.ERROR_RETRY_LENGTH);
    }
  );
});
