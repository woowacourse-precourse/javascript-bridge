const BridgeGame = require('../src/BridgeGame');
const ERROR = require('../src/constants/error');

describe('BridgeGame 테스트', () => {
  test('이동 성공 테스트', () => {
    const bridge = ['U', 'D', 'U'];
    const movings = ['U', 'D', 'U'];
    const bridgeGame = new BridgeGame(bridge);
    movings.forEach((moving) => {
      bridgeGame.move(moving);
    });

    expect(bridgeGame.canMove()).toBeTruthy();
  });

  test('이동 실패 테스트', () => {
    const bridge = ['U', 'D', 'U'];
    const movings = ['U', 'D', 'D'];
    const bridgeGame = new BridgeGame(bridge);
    movings.forEach((moving) => {
      bridgeGame.move(moving);
    });

    expect(bridgeGame.canMove()).toBeFalsy();
  });

  test('생성된 다리와 건넌 다리의 길이가 일치 테스트', () => {
    const bridge = ['U', 'D', 'U'];
    const movings = ['U', 'D', 'U'];
    const bridgeGame = new BridgeGame(bridge);
    movings.forEach((moving) => {
      bridgeGame.move(moving);
    });

    expect(bridgeGame.isSameBridgeSize()).toBeTruthy();
  });

  test('게임 시도 횟수 테스트', () => {
    const bridge = ['U', 'D', 'U'];
    const bridgeGame = new BridgeGame(bridge);
    bridgeGame.retry();
    bridgeGame.retry();
    bridgeGame.retry();

    expect(bridgeGame.getAttempt()).toBe(4);
  });

  test('이동 문자가 잘못된 값일 시 에러 던저기', () => {
    const bridge = ['U', 'D', 'U'];
    const moving = 'Q';
    const bridgeGame = new BridgeGame(bridge);

    expect(() => bridgeGame.move(moving)).toThrow(ERROR.MOVING);
  });
});
