const BridgeGame = require("../src/BridgeGame");

describe("bridgeGame 클래스 테스트", () => {
  const bridgeGame = new BridgeGame();

  test("움직임에 따른 위치 변화 테스트", () => {
    bridgeGame.move("U", ["U", "D", "D"]);
    expect(bridgeGame.getMyCurrentPosition()).toEqual(1);
    bridgeGame.move("D", ["U", "D", "D"]);
    expect(bridgeGame.getMyCurrentPosition()).toEqual(2);
  });

  test("재시도에 따른 위치와 시도횟수 변화 테스트", () => {
    bridgeGame.retry();
    expect(bridgeGame.getMyCurrentPosition()).toEqual(0);
    expect(bridgeGame.getNumberOfAttempt()).toEqual(2);
  });
});
