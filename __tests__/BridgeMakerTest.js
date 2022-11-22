const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

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

  test(`생성된 랜덤 숫자가 0이면 "D"를 배열에 저장한다`, () => {
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
