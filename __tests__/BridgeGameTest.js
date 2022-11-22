const BridgeGame = require("../src/BridgeGame");

describe("BridgeMaker 클래스 테스트", () => {
  test("플레이어 이동 함수가 잘 작동하는지 테스트", () => {
    let bridgeGame = new BridgeGame(3);

    bridgeGame.move('U');
    bridgeGame.move('D');
    bridgeGame.move('D');
    
    const moveRecord = bridgeGame.getPlayerMovingRecord();
    expect(moveRecord).toEqual("UDD");
  });

  test("재시도가 잘 작동하는지 테스트", () => {
    let bridgeGame = new BridgeGame(3);

    bridgeGame.move('U')
    bridgeGame.retry();

    const attemptNumber = bridgeGame.getAttemptNumber();
    expect(attemptNumber).toEqual(2);
  });

  test("플레이어가 다리를 다 건넜는지 확인하는 기능 테스트", () => {
    let bridgeGame = new BridgeGame(3);

    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');

    const isFinish = bridgeGame.isFinish();
    expect(isFinish).toEqual(true);
  });
});
