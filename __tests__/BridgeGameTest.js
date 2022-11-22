const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("../src/BridgeGame");

const bridgeGame = new BridgeGame();
const bridge = ["U", "D", "D", "U"];

describe("다리 건너기 테스트", () => {
  test("U를 입력 했을 때 다리 건너기", () => {
    for (let i = 0; i < bridge.length; i++) {
      bridgeGame.upMovement(bridge, i);
    }

    expect(bridgeGame.getUpResult()).toEqual([" O ", " X ", " X ", " O "]);
    expect(bridgeGame.getDownResult()).toEqual(["   ", "   ", "   ", "   "]);
  });

  test("D를 입력 했을 때 다리 건너기", () => {
    for (let i = 0; i < bridge.length; i++) {
      bridgeGame.downMovement(bridge, i);
    }

    expect(bridgeGame.getUpResult()).toEqual(["   ", "   ", "   ", "   "]);
    expect(bridgeGame.getDownResult()).toEqual([" X ", " O ", " O ", " X "]);
  });
});

MissionUtils.Console.close();
