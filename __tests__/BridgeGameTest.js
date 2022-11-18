const BridgeGame = require('../src/BridgeGame');

describe('다리 게임 test', () => {
  test('가능한 움직임인지 판단하는 기능', () => {
    const bridge = ['U', 'D', 'D'];
    const bridgeGame = new BridgeGame(bridge);

    bridgeGame.move('U');
    expect(bridgeGame.isMovesPossible()).toEqual([true]);
    bridgeGame.move('D');
    expect(bridgeGame.isMovesPossible()).toEqual([true, true]);
    bridgeGame.move('U');
    expect(bridgeGame.isMovesPossible()).toEqual([true, true, false]);
  });
});
