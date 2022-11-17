const BridgeGame = require('../src/BridgeGame');

const NUMBER_ERROR_TEXT = '[ERROR] 전달된 인수는 숫자 타입이 아닙니다.';

describe('숫자값 문자열 치환 기능 테스트', () => {
  test('메소드 이름은 "replaceString"로 정의된다.', () => {
    const METHOD_NAME = 'replaceString';

    expect(BridgeGame.replaceString.name).toEqual(METHOD_NAME);
  });

  test('요소가 0인 경우 "D"로 치환한다.', () => {
    const EXPECTED = 0;
    const RECEIVED = 'D';

    expect(BridgeGame.replaceString(EXPECTED)).toEqual(RECEIVED);
  });

  test('요소가 1인 경우 "U"로 치환한다.', () => {
    const EXPECTED = 1;
    const RECEIVED = 'U';

    expect(BridgeGame.replaceString(EXPECTED)).toEqual(RECEIVED);
  });

  test('인자가 숫자가 아니라면 예외를 발생한다.', () => {
    expect(() => {
      const EXPECTED = NaN;

      BridgeGame.replaceString(EXPECTED);
    }).toThrow(NUMBER_ERROR_TEXT);
  });

  test.each([-1, 2, 3, NaN])(
    '인자가 0, 1을 제외한 값이라면 예외를 발생한다.',
    (EXPECTED) => {
      const RECEIVED = '[ERROR]';

      expect(() => {
        BridgeGame.replaceString(EXPECTED);
      }).toThrow(RECEIVED);
    },
  );
});

describe('사용자가 칸을 이동할 때 사용하는 메서드 테스트', () => {
  test('메소드 이름은 "move"로 정의된다.', () => {
    const bridgeGame = new BridgeGame();
    const METHOD_NAME = 'move';

    expect(bridgeGame.move.name).toEqual(METHOD_NAME);
  });

  test('메서드를 호출할 때마다 값을 증가시킨다.', () => {
    const bridgeGame = new BridgeGame();
    const EXPECTED = [0, 1, 2, 3];

    EXPECTED.forEach((RECEIVED) => expect(bridgeGame.move()).toEqual(RECEIVED));
  });
});

describe('사용자가 시작전인지 확인하는 메서드', () => {
  test('메소드 이름은 "isBeforeStart"로 정의된다.', () => {
    const bridgeGame = new BridgeGame();
    const METHOD_NAME = 'isBeforeStart';

    expect(bridgeGame.isBeforeStart.name).toEqual(METHOD_NAME);
  });

  test('초기값은 true를 반환한다.', () => {
    const bridgeGame = new BridgeGame();

    expect(bridgeGame.isBeforeStart()).toBeTruthy();
  });
});

describe('첫번째 포지션을 설정하는 메소드 테스트', () => {
  test('메소드 이름은 "setFirstPosition"로 정의된다.', () => {
    const bridgeGame = new BridgeGame();
    const METHOD_NAME = 'setFirstPosition';

    expect(bridgeGame.setFirstPosition.name).toEqual(METHOD_NAME);
  });

  test('유저 포지션이 null이라면 0으로 값을 세팅한다.', () => {
    const bridgeGame = new BridgeGame();
    const RECEIVED = 0;

    expect(bridgeGame.setFirstPosition()).toEqual(RECEIVED);
  });
});

describe('사용자 위치를 확인하는 메서드 테스트', () => {
  test('메소드 이름은 "findUserPosition"로 정의된다.', () => {
    const bridgeGame = new BridgeGame();
    const METHOD_NAME = 'findUserPosition';

    expect(bridgeGame.findUserPosition.name).toEqual(METHOD_NAME);
  });

  test('첫 호출에는 null 위치에 있다.', () => {
    const bridgeGame = new BridgeGame();
    const RECEIVED = null;

    expect(bridgeGame.findUserPosition()).toEqual(RECEIVED);
  });

  test('현재위치는 0을 반환한다.', () => {
    const bridgeGame = new BridgeGame();
    const RECEIVED = 0;

    bridgeGame.move();

    expect(bridgeGame.findUserPosition()).toEqual(RECEIVED);
  });

  test('현재위치는 1을 반환한다.', () => {
    const bridgeGame = new BridgeGame();
    const RECEIVED = 1;

    bridgeGame.move();
    bridgeGame.move();

    expect(bridgeGame.findUserPosition()).toEqual(RECEIVED);
  });
});

describe('사용자가 게임을 다시 시도할 때 사용하는 메서드 테스트', () => {
  test('메소드 이름은 "retry"로 정의된다.', () => {
    const bridgeGame = new BridgeGame();
    const METHOD_NAME = 'retry';

    expect(bridgeGame.retry.name).toEqual(METHOD_NAME);
  });
});
