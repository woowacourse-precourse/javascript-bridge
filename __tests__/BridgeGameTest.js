const BridgeGame = require("../src/BridgeGame");

const getPushLogSpy = () => {
  const logSpy = jest.spyOn(Array.prototype, "push");
  logSpy.mockClear();
  return logSpy;
};

describe("다리 건너기 게임 진행 테스트", () => {
  test("이동 테스트", () => {
    const logSpy = getPushLogSpy();
    const bridge = ["U", "D", "D"];
    const bridgeGame = new BridgeGame(bridge);
    const bridgeIndexes = [0, 1, 2];
    const directions = ["U", "D", "U"];
    const matchSymbols = ["O", "O", "X"];

    bridgeGame.getIndex = jest.fn();
    bridgeGame.getMatchSymbol = jest.fn();

    bridgeIndexes.reduce((acc, index) => {
      return acc.mockReturnValueOnce(index);
    }, bridgeGame.getIndex);

    matchSymbols.reduce((acc, index) => {
      return acc.mockReturnValueOnce(index);
    }, bridgeGame.getMatchSymbol);

    directions.forEach((direction) => {
      bridgeGame.move(direction);
    });

    logSpy.mock.calls.forEach(([{ direction, matchSymbol }], index) => {
      expect(direction).toBe(directions[index]);
      expect(matchSymbol).toBe(matchSymbols[index]);
    });
  });
});
