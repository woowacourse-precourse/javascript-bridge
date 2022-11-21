const BridgeGame = require('../src/BridgeGame');
describe('BridgeGame 테스트', () => {
  const bridgeGame = new BridgeGame(6);
  test('move 테스트', () => {
    bridgeGame.move('U');
    expect(bridgeGame.result).not.toBe(undefined);
  });
  test('retry 테스트', () => {
    bridgeGame.retry();
    expect(bridgeGame.tryCount).toBe(2);
  });
  test('isEnd 테스트', () => {
    expect(bridgeGame.isEnd()).toBe(true);
  });
});
