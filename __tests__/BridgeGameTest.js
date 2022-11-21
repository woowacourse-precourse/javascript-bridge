const BridgeGame = require('../src/model/BridgeGame');

describe('Bridge Game Move Test', () => {
  let bridgeGame;
  beforeEach(() => {
    bridgeGame = new BridgeGame();
  });

  test('사용자가 입력한 개수와, 다리의 총 개수가 일치하는지 Test', () => {
    const bridge = ['U', 'D', 'U'];
    bridgeGame.updateBridge(bridge);

    bridgeGame.selectMovemonetPosition('U');
    bridgeGame.selectMovemonetPosition('D');
    bridgeGame.selectMovemonetPosition('U');

    const result = bridgeGame.isSuccess();
    expect(result).toBeTruthy();
  });

  test('사용자가 선택한 값으로 잘 이동했는지 Test', () => {
    const bridge = ['U', 'D', 'U', 'D'];

    bridgeGame.updateBridge(bridge);

    bridgeGame.selectMovemonetPosition('U');
    bridgeGame.selectMovemonetPosition('D');
    bridgeGame.selectMovemonetPosition('D');
    bridgeGame.selectMovemonetPosition('U');
    const result = bridgeGame.move();
    expect(result).toEqual([
      ['O', ' '],
      [' ', 'O'],
      [' ', 'X'],
      ['X', ' '],
    ]);
  });

  describe('retry test', () => {
    test('재시작시 사용자가 입력한값이 초기화가 되는지 Test', () => {
      bridgeGame.selectMovemonetPosition('U');
      bridgeGame.selectMovemonetPosition('D');
      bridgeGame.retry();
      const result = bridgeGame.getUserBridge();
      expect(result).toEqual([]);
    });

    test('재시작한 횟수 Test', () => {
      bridgeGame.retry();
      bridgeGame.retry();
      const result = bridgeGame.getNumberOfAttempts();
      expect(result).toBe(3);
    });
  });
});
