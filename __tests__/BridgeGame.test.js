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
});
