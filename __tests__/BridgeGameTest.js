const BridgeGame = require('../src/domain/BridgeGame');
const BridgeMaker = require('../src/BridgeMaker');

const getSettedBridgeGame = (bridge) => {
  BridgeMaker.makeBridge = jest.fn();
  BridgeMaker.makeBridge.mockReturnValueOnce(bridge);
  const bridgeGame = new BridgeGame();
  bridgeGame.initalize(bridge.length);
  return bridgeGame;
};

describe('다리 게임 test', () => {
  test('가능한 움직임인지 판단하는 기능', () => {
    const bridge = ['U', 'D', 'D'];
    const bridgeGame = getSettedBridgeGame(bridge);
    bridgeGame.move('U');
    expect(bridgeGame.isMovesPossible()).toEqual([true]);
    bridgeGame.move('D');
    expect(bridgeGame.isMovesPossible()).toEqual([true, true]);
    bridgeGame.move('U');
    expect(bridgeGame.isMovesPossible()).toEqual([true, true, false]);
  });

  test('게임 승리 판단', () => {
    const bridge = ['U', 'D', 'D', 'U', 'D'];
    const bridgeGame = getSettedBridgeGame(bridge);

    for (let i = 0; i < bridge.length; i += 1) {
      bridgeGame.move(bridge[i]);
      expect(bridgeGame.isWin()).toBe(i === bridge.length - 1);
    }
  });

  test('게임 실패 판단', () => {
    const bridge = ['U', 'D', 'D', 'U', 'D'];
    const choice = ['U', 'D', 'D', 'D'];
    const bridgeGame = getSettedBridgeGame(bridge);

    for (let i = 0; i < choice.length; i += 1) {
      bridgeGame.move(choice[i]);
      expect(bridgeGame.isLose()).toBe(!(bridge[i] === choice[i]));
    }
  });

  test('게임 재시도', () => {
    const bridge = ['U', 'D', 'D', 'U', 'D'];
    const choice = ['U', 'D', 'D', 'D'];
    const bridgeGame = getSettedBridgeGame(bridge);

    for (let i = 0; i < choice.length; i += 1) {
      bridgeGame.move(choice[i]);
    }

    expect(bridgeGame.isLose()).toBe(true);
    bridgeGame.retry();
    expect(bridgeGame.getMoves()).toEqual([]);
    expect(bridgeGame.isLose()).toBe(false);
    expect(bridgeGame.getTryCount()).toBe(2);
  });
});
