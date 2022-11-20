const BridgeGame = require('../src/Model/BridgeGame');
const ERROR = require('../src/constants/error');
const SETTING = require('../src/constants/gameSetting');

describe('BridgeGame 테스트', () => {
  test('이동할 수 있는지 확인', () => {
    const bridge = ['U', 'D', 'U'];
    const bridgeGame = new BridgeGame();
    bridgeGame.setBridgeGame(bridge);
    bridgeGame.try();

    expect(bridgeGame.canMove(SETTING.MOVING_UP)).toBeTruthy();
    expect(bridgeGame.canMove(SETTING.MOVING_DOWN)).toBeFalsy();
  });

  test('게임 성공 테스트', () => {
    const bridge = ['U', 'D', 'U'];
    const movings = ['U', 'D', 'U'];
    const bridgeGame = new BridgeGame();
    bridgeGame.setBridgeGame(bridge);
    bridgeGame.try();
    movings.forEach((moving) => {
      bridgeGame.move(moving, bridgeGame.canMove(moving));
    });

    expect(bridgeGame.isGameSuccess()).toBeTruthy();
    expect(bridgeGame.getBridgeMap()).toEqual([
      [SETTING.CAN_MOVE, SETTING.DONT_MOVE, SETTING.CAN_MOVE],
      [SETTING.DONT_MOVE, SETTING.CAN_MOVE, SETTING.DONT_MOVE],
    ]);
    expect(bridgeGame.getAttempt()).toBe(1);
  });
});
