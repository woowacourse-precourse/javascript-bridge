const BridgeGame = require('../src/BridgeGame');
const Result = require('../src/Result');

describe('BridgeGame 테스트', () => {
  const bridgeGame = new BridgeGame(3);

  test('move 테스트 1 (index 증가)', () => {
    bridgeGame.move('U');
    expect(bridgeGame.index).toBe(1);
  });

  test('retry 테스트 1 (tryCount 증가)', () => {
    bridgeGame.retry();
    expect(bridgeGame.tryCount).toBe(2);
  });

  test('retry 테스트 2 (index 초기화)', () => {
    bridgeGame.retry();
    expect(bridgeGame.index).toBe(0);
  });
});
