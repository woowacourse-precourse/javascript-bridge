const BridgeGame = require('../src/BridgeGame');

describe('다리 게임 테스트', () => {
  const bridge = ['U', 'U', 'U', 'U'];
  test('사용자가 갈 수 없는 곳을 선택했다면 isFail이 true를 리턴해야 한다.', () => {
    const bridgeGame = new BridgeGame(bridge);
    bridgeGame.move('D');
    const isFail = bridgeGame.isFail();
    expect(isFail).toBe(true);
  });
});
