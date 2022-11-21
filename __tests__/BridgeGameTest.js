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

  test("BridgeGame클래스에서 이동가능하면 O, 불가능하면 X를 표시한다.", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    const directions = ["U", "D", "D"];

    directions.forEach((direction) => {
      bridgeGame.canMove(direction) ? bridgeGame.move(direction) : bridgeGame.stopMoving(direction);
    });

    expect(bridgeGame.getBridgeMap()).toEqual([
      ["O", " ", " "],
      [" ", "O", "X"],
    ]);
  });
});
