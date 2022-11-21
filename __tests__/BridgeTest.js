const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("../src/BridgeGame");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const OutputView = require("../src/OutputView");
describe("BridgeMaker 클래스 테스트", () => {
  test("입력받은 다리 길이에 따른 다리 생성 길이", () => {
    expect(
      BridgeMaker.makeBridge(5, BridgeRandomNumberGenerator.generate)
    ).toHaveLength(5);
  });
});

describe("BridgeGame 클래스 테스트", () => {
  let bridgeGame;
  beforeEach(() => {
    bridgeGame = new BridgeGame();
  });
  test("건널 수 있는 칸을 건넜을 때", () => {
    const expected = [1, ["O"], ["U"]];
    expect(bridgeGame.move("U", 0, ["U", "D", "U"])).toEqual(expected);
  });
  test("건널 수 없는 칸을 건넜을 때", () => {
    const expected = [1, ["X"], ["D"]];
    expect(bridgeGame.move("D", 0, ["U", "D", "U"])).toEqual(expected);
  });
});

