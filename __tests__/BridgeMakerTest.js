const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

describe("BridgeMaker 객체 테스트", () => {
  test("다리의 길이를 입력 받아서 랜덤으로 길을 생성한다.", () => {
    BridgeRandomNumberGenerator.generate = jest.fn();
    [1, 0, 0, 0, 1].reduce((acc, randomNumber) => {
      return acc.mockReturnValueOnce(randomNumber);
    }, BridgeRandomNumberGenerator.generate);

    expect(BridgeMaker.makeBridge(5, BridgeRandomNumberGenerator.generate)).toStrictEqual(
      ["U", "D", "D", "D", "U"]
    );
  });
});
