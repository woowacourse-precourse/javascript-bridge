const BridgeGame = require('../src/BridgeGame');
const ERROR = require('../src/constants/error');

describe('BridgeGame 테스트', () => {
  test('위로 이동', () => {
    const bridge = ['U', 'D', 'U'];
    const moving = 'U';
    const bridgeGame = new BridgeGame(bridge);

    expect(() => {
      bridgeGame.move(moving);
      bridgeGame.getMovingBridge();
    }).toEqual(['U']);
  });

  test('아래로 이동', () => {
    const bridge = ['D', 'D', 'U'];
    const moving = 'D';
    const bridgeGame = new BridgeGame(bridge);

    expect(() => {
      bridgeGame.move(moving);
      bridgeGame.getMovingBridge();
    }).toEqual(['D']);
  });

  test('이동했는지 확인', () => {
    const bridge = ['U', 'D', 'U'];
    const movings = ['U', 'D', 'U'];
    const bridgeGame = new BridgeGame(bridge);
    movings.forEach((moving) => {
      bridgeGame.move(moving);
    });

    expect(() => bridgeGame.isMove()).toBeTruthy();
  });

  test('생성된 다리와 건넌 다리의 길이가 일치하는지 확인', () => {
    const bridge = ['U', 'D', 'U'];
    const movings = ['U', 'D', 'U'];
    const bridgeGame = new BridgeGame(bridge);
    movings.forEach((moving) => {
      bridgeGame.move(moving);
    });

    expect(() => bridgeGame.isSameBridgeSize()).toBeTruthy();
  });

  test('게임 실패 확인', () => {
    const bridge = ['U', 'D', 'U'];
    const movings = ['U', 'D', 'D'];
    const bridgeGame = new BridgeGame(bridge);
    movings.forEach((moving) => {
      bridgeGame.move(moving);
    });

    expect(() => bridgeGame.isMove()).toBeFalsy();
  });

  test('이동 문자를 잘못 입력 시 에러', () => {
    const bridge = ['U', 'D', 'U'];
    const moving = 'Q';
    const bridgeGame = new BridgeGame(bridge);

    expect(() => bridgeGame.move(moving)).toThrow(ERROR.MOVING);
  });
});
