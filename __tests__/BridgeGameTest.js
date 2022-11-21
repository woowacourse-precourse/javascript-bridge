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

  test("이동 표식 테스트", () => {
    const bridge = ["U", "D", "D"];
    const bridgeGame = new BridgeGame(bridge);
    const directions = [
      ["U", "U"],
      ["U", "D"],
      ["D", "U"],
      ["D", "D"],
    ];
    const matchSymbols = ["O", "X", "X", "O"];

    directions.forEach(([dir1, dir2], index) => {
      const symbol = bridgeGame.getMatchSymbol(dir1, dir2);
      expect(symbol).toBe(matchSymbols[index]);
    });
  });

  test("지도 만들기 테스트", () => {
    const bridge = ["U", "D", "D"];
    const bridgeGame = new BridgeGame(bridge);
    const directions = ["U", "D", "U"];
    const upside = ["O", " ", "X"];
    const downside = [" ", "O", " "];

    directions.forEach((direction) => {
      bridgeGame.move(direction);
    });

    const gameMap = bridgeGame.getMap();

    expect(gameMap[0]).toEqual(upside);
    expect(gameMap[1]).toEqual(downside);
  });

  test("마지막 이동 성공 판단 테스트", () => {
    const bridge = ["U", "D", "D"];
    const directions = ["U", "D", "U"];
    const bridgeGame = new BridgeGame(bridge);
    const booleanValue = [true, true, false];

    directions.forEach((direction, index) => {
      bridgeGame.move(direction);

      const correctness = bridgeGame.hasMovedCorrectly();
      expect(correctness).toBe(booleanValue[index]);
    });
  });

  test("다리 완전 횡단 판단 테스트", () => {
    const bridge = ["U", "D", "D"];
    const directions = ["U", "D", "D"];
    const bridgeGame = new BridgeGame(bridge);

    directions.forEach((direction, index) => {
      bridgeGame.move(direction);
    });

    const crossed = bridgeGame.hasCrossedCompletely();
    expect(crossed).toBe(true);
  });
});
