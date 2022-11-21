const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const BridgeGame = require("../src/BridgeGame");


describe("BridgeGame 테스트", () => {
  test("기능 테스트", () => {
    const bridgeGame = new BridgeGame();
    const size = 5
    bridgeGame.setBridge(size)

    expect(bridgeGame.getBride().length).toEqual(size);
  });
});
