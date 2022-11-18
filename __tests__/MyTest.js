const { ERROR, INPUT, OUTPUT } = require("../src/data/Constants");
const Validation = require("../src/Validation");
const App = require("../src/App");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const { makeBridge } = require("../src/BridgeMaker");
const { bridgeGameStart } = require("../src/OutputView");

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

describe(`다리를 생성기능 테스트`, () => {
  test(`입력받은 bridgeSize와 만들어진 다리 배열의 길이는 일치한다`, () => {
    const size = 3;
    const generateRandomNumber = BridgeRandomNumberGenerator.generate;

    expect(BridgeMaker.makeBridge(size, generateRandomNumber)).toHaveLength(
      size
    );
  });

  test(`생성된 랜덤 숫자가 1이면 "U"를 배열에 저장한다.`, () => {
    const size = 3;
    function generateRandomNumber() {
      return 1;
    }
    expect(BridgeMaker.makeBridge(size, generateRandomNumber)).toEqual([
      "U",
      "U",
      "U",
    ]);
  });

  test(`생성된 랜덤 숫자가 0이면 "U"를 배열에 저장한다`, () => {
    const size = 3;
    function generateRandomNumber() {
      return 0;
    }
    expect(BridgeMaker.makeBridge(size, generateRandomNumber)).toEqual([
      "D",
      "D",
      "D",
    ]);
  });

  test(`생선된 랜덤 숫자는 0 또는 1 이다.`, () => {
    expect(String(BridgeRandomNumberGenerator.generate())).toMatch(/0|1/);
  });
});
