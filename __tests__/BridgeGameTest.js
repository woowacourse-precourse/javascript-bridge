const BridgeGame =  require('../src/BridgeGame');

describe("BridgeGame 테스트", () => {
  test("BridgeGame move 테스트", () => {
    const bridgeGame = new BridgeGame();
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    bridgeGame.setBridge(3, mockGenerator);
    const result = bridgeGame.move('U');

    expect(result).toEqual({ isCorrect: true, isGameEnd: false, count: 1, map: {1: ["O"], 0: [" "]}});
  });
});