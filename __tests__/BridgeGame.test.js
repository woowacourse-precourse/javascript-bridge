const BridgeGame = require('../src/BridgeGame');

const NUMBER_ERROR_TEXT = '[ERROR] 전달된 인수는 숫자 타입이 아닙니다.';
const ARRAY_ERROR_TEXT = '[ERROR] 전달된 인수는 배열 타입이 아닙니다.';
const RANGE_ERROR_TEXT = '[ERROR] 지정한 범위의 값이 아닙니다.';
const POSITION_ERROR_TEXT = '[ERROR] 플레이가 아직 이동하지 않았습니다.';

/**
 * 전달된 인수만큼 함수를 반복 실행하는 유틸 함수이다.
 * @param {number} length
 * @param {function(): any} fn
 */
const loop = (length, fn) => Array.from({ length }).forEach(fn);

describe('숫자값 문자열 치환 기능 테스트', () => {
  test('메소드 이름은 "replaceString"로 정의된다.', () => {
    const METHOD_NAME = 'replaceString';

    expect(BridgeGame.replaceString.name).toEqual(METHOD_NAME);
  });

  test('요소가 "0"인 경우 "D"로 치환한다.', () => {
    const EXPECTED = '0';
    const RECEIVED = 'D';

    expect(BridgeGame.replaceString(EXPECTED)).toEqual(RECEIVED);
  });

  test('요소가 "1"인 경우 "U"로 치환한다.', () => {
    const EXPECTED = '1';
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
    const FIRST_ROUND = 1;

    loop(FIRST_ROUND, bridgeGame.move.bind(bridgeGame));

    expect(bridgeGame.findUserPosition()).toEqual(RECEIVED);
  });

  test('현재위치는 1을 반환한다.', () => {
    const bridgeGame = new BridgeGame();
    const RECEIVED = 1;
    const SECOND_ROUND = 2;

    loop(SECOND_ROUND, bridgeGame.move.bind(bridgeGame));

    expect(bridgeGame.findUserPosition()).toEqual(RECEIVED);
  });
});

describe('사용자가 게임을 다시 시도할 때 사용하는 메서드 테스트', () => {
  test('메소드 이름은 "retry"로 정의된다.', () => {
    const bridgeGame = new BridgeGame();
    const METHOD_NAME = 'retry';

    expect(bridgeGame.retry.name).toEqual(METHOD_NAME);
  });

  test('유저 포지션 위치를 null로 설정한다.', () => {
    const bridgeGame = new BridgeGame();
    const RECEIVED = null;
    const SECOND_ROUND = 2;

    loop(SECOND_ROUND, bridgeGame.move.bind(bridgeGame));

    expect(bridgeGame.retry()).toEqual(RECEIVED);
  });
});

describe('다리를 끝까지 갔는지 확인하는 메서드 테스트', () => {
  test('메소드 이름은 "isBridgeEnd"로 정의된다.', () => {
    const bridgeGame = new BridgeGame();
    const METHOD_NAME = 'isBridgeEnd';

    expect(bridgeGame.isBridgeEnd.name).toEqual(METHOD_NAME);
  });

  test('배열의 길이가 3일 때 인덱스 1에 위치한다면 false를 반환한다.', () => {
    const bridgeGame = new BridgeGame();
    const ARRAY_LENGTH = 3;
    const SECOND_ROUND = 2;

    loop(SECOND_ROUND, bridgeGame.move.bind(bridgeGame));

    expect(bridgeGame.isBridgeEnd(ARRAY_LENGTH)).toBeFalsy();
  });

  test('배열의 길이가 3일 때 인덱스 2에 위치한다면 true를 반환한다.', () => {
    const bridgeGame = new BridgeGame();
    const ARRAY_LENGTH = 3;
    const THREE_ROUND = 3;

    loop(THREE_ROUND, bridgeGame.move.bind(bridgeGame));

    expect(bridgeGame.isBridgeEnd(ARRAY_LENGTH)).toBeTruthy();
  });

  test('인자가 숫자가 아니라면 예외를 발생한다.', () => {
    const bridgeGame = new BridgeGame();
    const EXPECTED = NaN;

    expect(() => {
      bridgeGame.isBridgeEnd(EXPECTED);
    }).toThrow(NUMBER_ERROR_TEXT);
  });
});

describe('다리 값을 세팅하는 메서드 테스트', () => {
  test('메소드 이름은 "setBridge"로 정의된다.', () => {
    const bridgeGame = new BridgeGame();
    const METHOD_NAME = 'setBridge';

    expect(bridgeGame.setBridge.name).toEqual(METHOD_NAME);
  });

  test('["U", "D", "D"]을 할당하면 할당된 값이 들어있다.', () => {
    const bridgeGame = new BridgeGame();
    const EXPECTED = ['U', 'D', 'D'];
    const RECEIVED = ['U', 'D', 'D'];

    expect(bridgeGame.setBridge(EXPECTED)).toEqual(RECEIVED);
  });

  test('배열이 아니라면 예외를 발생한다.', () => {
    const bridgeGame = new BridgeGame();
    const EXPECTED = '"U", "D", "D"';

    expect(() => {
      bridgeGame.setBridge(EXPECTED);
    }).toThrow(ARRAY_ERROR_TEXT);
  });

  test('배열의 길이가 3 이상 20 이하가 아니라면 예외를 발생한다.', () => {
    const bridgeGame = new BridgeGame();
    const EXPECTED1 = ['D', 'D'];
    const EXPECTED2 = Array(21).fill('D');

    expect(() => {
      bridgeGame.setBridge(EXPECTED1);
    }).toThrow(RANGE_ERROR_TEXT);

    expect(() => {
      bridgeGame.setBridge(EXPECTED2);
    }).toThrow(RANGE_ERROR_TEXT);
  });
});

describe('다리 정보를 가져오는 메소드 테스트', () => {
  test('메소드 이름은 "getBridge"로 정의된다.', () => {
    const bridgeGame = new BridgeGame();
    const METHOD_NAME = 'getBridge';

    expect(bridgeGame.getBridge.name).toEqual(METHOD_NAME);
  });

  test('["U", "D", "D"]을 할당하면 할당된 값을 갖고온다.', () => {
    const bridgeGame = new BridgeGame();
    const bridgeInfo = ['U', 'D', 'D'];
    const RECEIVED = ['U', 'D', 'D'];

    bridgeGame.setBridge(bridgeInfo);

    expect(bridgeGame.getBridge()).toEqual(RECEIVED);
  });
});

describe('사용자 입력 "U", "D" 판단 메서드 테스트', () => {
  test('메소드 이름은 "checkIncludeUandD"로 정의된다.', () => {
    const METHOD_NAME = 'checkIncludeUandD';

    expect(BridgeGame.checkIncludeUandD.name).toEqual(METHOD_NAME);
  });

  test('대문자 "U", 대문자 "D"를 입력을 제외한 값은 예외를 발생한다.', () => {
    expect(() => {
      const EXPECTED = 'K';

      BridgeGame.checkIncludeUandD(EXPECTED);
    }).toThrow(RANGE_ERROR_TEXT);
  });

  test('대문자 "U", 대문자 "D"를 입력을 포함한 값은 예외를 발생시키지 않는다.', () => {
    expect(() => {
      const EXPECTED = 'D';

      BridgeGame.checkIncludeUandD(EXPECTED);
    }).not.toThrow(RANGE_ERROR_TEXT);
  });
});

describe('사용자 입력 "R", "Q" 판단 메서드 테스트', () => {
  test('메소드 이름은 "checkIncludeRandQ"로 정의된다.', () => {
    const METHOD_NAME = 'checkIncludeRandQ';

    expect(BridgeGame.checkIncludeRandQ.name).toEqual(METHOD_NAME);
  });

  test('대문자 "R", 대문자 "Q"를 입력을 제외한 값은 예외를 발생한다.', () => {
    expect(() => {
      const EXPECTED = 'U';

      BridgeGame.checkIncludeRandQ(EXPECTED);
    }).toThrow(RANGE_ERROR_TEXT);
  });

  test('대문자 "R", 대문자 "Q"를 입력을 포함한 값은 예외를 발생시키지 않는다.', () => {
    expect(() => {
      const EXPECTED = 'R';

      BridgeGame.checkIncludeRandQ(EXPECTED);
    }).not.toThrow(RANGE_ERROR_TEXT);
  });
});

describe('출발전 판단 메서드 테스트', () => {
  test('메소드 이름은 "checkBeforeStart"로 정의된다.', () => {
    const METHOD_NAME = 'checkBeforeStart';
    const bridgeGame = new BridgeGame();

    expect(bridgeGame.checkBeforeStart.name).toEqual(METHOD_NAME);
  });

  test('유저가 아직 출발 전(null)이라면 예외를 발생한다.', () => {
    expect(() => {
      const bridgeGame = new BridgeGame();

      bridgeGame.checkBeforeStart();
    }).toThrow(POSITION_ERROR_TEXT);
  });

  test('유저가 아직 출발 전(null)이 아니라면 예외를 발생시키지 않는다.', () => {
    expect(() => {
      const bridgeGame = new BridgeGame();

      bridgeGame.move();
      bridgeGame.checkBeforeStart();
    }).not.toThrow(POSITION_ERROR_TEXT);
  });
});

describe('이동할 칸의 결과를 반환하는 메서드 테스트', () => {
  const bridgeGame = new BridgeGame();
  const bridge = ['D', 'U', 'U'];

  bridgeGame.setBridge(bridge);
  bridgeGame.move();

  test('메소드 이름은 "calcBridgeReuslt"로 정의된다.', () => {
    const METHOD_NAME = 'calcBridgeReuslt';

    expect(bridgeGame.calcBridgeReuslt.name).toEqual(METHOD_NAME);
  });

  test('"D"를 전달하면 "O"를 반환한다.', () => {
    const EXPECTED = 'D';
    const RECEIVED = 'O';

    expect(bridgeGame.calcBridgeReuslt(EXPECTED)).toEqual(RECEIVED);
  });

  test('"U"를 전달하면 "X"를 반환한다.', () => {
    const EXPECTED = 'U';
    const RECEIVED = 'X';

    expect(bridgeGame.calcBridgeReuslt(EXPECTED)).toEqual(RECEIVED);
  });

  test('대문자 U, 대문자 D를 입력을 제외한 값은 예외를 발생한다.', () => {
    const EXPECTED = 'u';

    expect(() => {
      bridgeGame.calcBridgeReuslt(EXPECTED);
    }).toThrow(RANGE_ERROR_TEXT);
  });

  test('유저가 아직 출발 전(null)이라면 예외를 발생한다.', () => {
    expect(() => {
      const EXPECTED = 'U';

      bridgeGame.retry();
      bridgeGame.calcBridgeReuslt(EXPECTED);
    }).toThrow(POSITION_ERROR_TEXT);
  });
});

describe('위치 파악 메서드 테스트', () => {
  test('메소드 이름은 "getPositionIndex"로 정의된다.', () => {
    const bridgeGame = new BridgeGame();
    const METHOD_NAME = 'getPositionIndex';

    expect(bridgeGame.getPositionIndex.name).toEqual(METHOD_NAME);
  });

  test('위 칸으로 한번 이동하면 [0, 0]을 반환한다.', () => {
    const bridgeGame = new BridgeGame();
    const EXPECTED = 'U';
    const RECEIVED = [0, 0];

    bridgeGame.move();

    expect(bridgeGame.getPositionIndex(EXPECTED)).toEqual(RECEIVED);
  });
});
