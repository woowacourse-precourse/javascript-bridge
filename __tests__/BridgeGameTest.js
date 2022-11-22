const BridgeGame = require("../src/BridgeGame");

describe("BridgeGame 클래스 테스트", () => {
  test("start 메소드 입력 받은 다리 길이에 따라 다리 생성", () => {
    const bridgeGame = new BridgeGame();
    const bridgeLength = 4;
    bridgeGame.start(bridgeLength);
    // expect(bridgeGame.#bridge.length)
  });
});
