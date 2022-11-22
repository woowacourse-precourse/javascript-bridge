const BridgeMaker = require("../src/BridgeMaker");
const BridgeGame = require("../src/model/BridgeGame");

const mockFunc = BridgeMaker.makeBridge;
jest.mock("../src/BridgeMaker");

describe("BridgeGame 모델에 대한 검증을 합니다.", () => {
  test("올바르지 않은 다리 길이를 입력했을 때, 예외를 발생시킨다.", () => {
    expect(() => new BridgeGame("d")).toThrow("[ERROR]");
  });
  test("올바르지 않은 다리 길이 범위를 입력했을 때, 예외를 발생시킨다.", () => {
    expect(() => new BridgeGame("41")).toThrow("[ERROR]");
  });
  test("올바르지 않은 다리 길이(음수) 범위를 입력했을 때, 예외를 발생시킨다.", () => {
    expect(() => new BridgeGame("-4")).toThrow("[ERROR]");
  });
});

describe("BridgeGame 모델의 move 기능 테스트를 합니다.", () => {
  test("한 번에 성공하는 경우", () => {
    mockFunc.mockReturnValueOnce(["U", "D", "D"]);
    const bridgeGame = new BridgeGame(3);
    bridgeGame.move("U");
    expect(bridgeGame.gameResult).toEqual({ result: "[ O ]\n[   ]" });

    bridgeGame.move("D");
    expect(bridgeGame.gameResult).toEqual({ result: "[ O |   ]\n[   | O ]" });

    bridgeGame.move("D");
    expect(bridgeGame.gameResult).toEqual({
      result: "[ O |   |   ]\n[   | O | O ]",
    });
  });

  test("마지막에 실패하는 경우", () => {
    mockFunc.mockReturnValueOnce(["U", "D", "D"]);
    const bridgeGame = new BridgeGame(3);
    bridgeGame.move("U");
    expect(bridgeGame.gameResult).toEqual({ result: "[ O ]\n[   ]" });

    bridgeGame.move("D");
    expect(bridgeGame.gameResult).toEqual({ result: "[ O |   ]\n[   | O ]" });

    bridgeGame.move("U");
    expect(bridgeGame.gameResult).toEqual({
      result: "[ O |   | X ]\n[   | O |   ]",
    });
  });

  test("처음부터 실패하는 경우", () => {
    mockFunc.mockReturnValueOnce(["U", "D", "D"]);
    const bridgeGame = new BridgeGame(3);
    bridgeGame.move("D");
    expect(bridgeGame.gameResult).toEqual({ result: "[   ]\n[ X ]" });
  });
});
