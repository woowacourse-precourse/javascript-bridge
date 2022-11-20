const BridgeGame = require("../src/BridgeGame");
const BridgeMaker = require("../src/BridgeMaker");

describe("도메인 로직 단위 테스트", () => {
  test.each([
    [3, [1, 0, 0], ["U", "D", "D"]],
    [3, [1, 0, 1], ["U", "D", "U"]],
    [4, [1, 0, 0, 1], ["U", "D", "D", "U"]],
  ])("다리 생성 테스트", (size, randomNumbers, expected) => {
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());
    const bridge = BridgeMaker.makeBridge(size, mockGenerator);
    expect(bridge).toEqual(expected);
  });
});
