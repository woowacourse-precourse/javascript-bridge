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

  test('게임 승리 판단', () => {
    const bridge = ['U', 'D', 'D', 'U', 'D'];
    const bridgeGame = new BridgeGame(bridge);

    for (let i = 0; i < bridge.length; i += 1) {
      bridgeGame.move(bridge[i]);
      expect(bridgeGame.isGameWin()).toBe(i === bridge.length - 1);
    }
  });

  test('게임 실패 판단', () => {
    const bridge = ['U', 'D', 'D', 'U', 'D'];
    const choice = ['U', 'D', 'D', 'D'];
    const bridgeGame = new BridgeGame(bridge);

    for (let i = 0; i < choice.length; i += 1) {
      bridgeGame.move(choice[i]);
      expect(bridgeGame.isGameLose()).toBe(!(bridge[i] === choice[i]));
    }
  });
});
