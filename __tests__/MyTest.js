const { ERROR, INPUT, OUTPUT } = require("../src/data/Constants");
const Validation = require("../src/Validation");
const App = require("../src/App");

describe(`bridgeSize 입력값 타당성 테스트`, () => {
  test.each([["0"], ["-1"], ["21"]])(
    `유저가 3~20 사이의 숫자를 입력했는지 확인`,
    (input) => {
      expect((input) => {
        Validation.checkBridgeLength(input);
      }).toThrow();
    }
  );

  test.each([["a"], ["a1"], ["#3"], ["10."]])(
    `유저가 숫자만 입력 했는지 확인`,
    () => {
      (input) => {
        expect((input) => {
          Validation.checkBridgeLength(input);
        }).toThrow();
      };
    }
  );
});
