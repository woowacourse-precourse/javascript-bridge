const SETTING = require('../src/constants/gameSetting');
const BridgeGame = require('../src/Domain/BridgeGame');

describe('BridgeGame 게임 시작부터 성공까지 기능 테스트(다리 길이 3)', () => {
  const bridgeGame = new BridgeGame();
  const bridgeSize = 3;

  test('게임 시도', () => {
    bridgeGame.try();

    expect(bridgeGame.getAttempt()).toBe(1);
  });

  test('다리 한 번 건너기(위)', () => {
    bridgeGame.move(SETTING.MOVING_UP);

    expect(bridgeGame.getMoveCount()).toBe(1);
  });

  test('게임 성공 확인 / 한 번밖에 건너지 않았으므로 실패', () => {
    expect(bridgeGame.isGameSuccess(bridgeSize)).toBeFalsy();
  });

  test('게임 재시도 시 이동 횟수 초기화 및 시도 횟수 1 증가', () => {
    bridgeGame.retry();

    expect(bridgeGame.getAttempt()).toBe(2);
    expect(bridgeGame.getMoveCount()).toBe(0);
  });

  test('다리 세 번 건너기(위, 아래, 위)', () => {
    bridgeGame.move(SETTING.MOVING_UP);
    bridgeGame.move(SETTING.MOVING_DOWN);
    bridgeGame.move(SETTING.MOVING_UP);

    expect(bridgeGame.getMoveCount()).toBe(3);
  });

  test('게임 성공 확인 / 다리 끝까지 건넜으므로 성공', () => {
    expect(bridgeGame.isGameSuccess(bridgeSize)).toBeTruthy();
  });
});

describe('예외 테스트', () => {
  test('위, 아래가 아닌 곳을 이동했을 때', () => {
    const bridgeGame = new BridgeGame();

    expect(() => bridgeGame.move('Q')).toThrow('[ERROR]');
  });
});
