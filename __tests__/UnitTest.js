const BridgeGame = require('../src/BridgeGame');

describe('다리 건너기 로직 테스트', () => {
  test('다리를 건너다가 실패한 경우', () => {
    const bridge = ['U', 'D', 'D'];
    const userDirection = ['U', 'U'];
    const moveResult = [
      { fail: false, success: false },
      { fail: true, success: false },
    ];
    const bridgeGame = new BridgeGame();

    bridgeGame.setBridge(bridge);
    userDirection.forEach((direction, index) => {
      expect(bridgeGame.move(direction)).toEqual(moveResult[index]);
    });
  });
  test('다리 건너기를 성공한 경우', () => {
    const bridge = ['U', 'D', 'D'];
    const userDirection = ['U', 'D', 'D'];
    const moveResult = [
      { fail: false, success: false },
      { fail: false, success: false },
      { fail: false, success: true },
    ];
    const bridgeGame = new BridgeGame();

    bridgeGame.setBridge(bridge);
    userDirection.forEach((direction, index) => {
      expect(bridgeGame.move(direction)).toEqual(moveResult[index]);
    });
  });
});
