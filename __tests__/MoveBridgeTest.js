const BridgeGame = require('../src/BridgeGame');

describe('다리 이동 테스트', () => {
  test('다리 이동 시에 다리와 이동하는 곳이 일치하면 O가 들어가고 나머지는 빈칸이 들어간다.', () => {
    const bridge = ['U', 'D', 'D'];
    const moving = 'U';
    const bridgeGame = new BridgeGame();
    bridgeGame.move(bridge, moving);
    const upDown = bridgeGame.getMoving();
    expect(upDown).toEqual({ up: ['O'], down: [' '] });
  });

  test('다리 이동 시에 다리와 이동하는 곳이 일치하지 않으면 true를 반환한다.', () => {
    const bridge = ['U', 'D', 'D'];
    const moving = 'D';
    const bridgeGame = new BridgeGame();
    bridgeGame.move(bridge, moving);
    expect(bridgeGame.isFail(bridge, moving)).toBeTruthy();
  });
});
