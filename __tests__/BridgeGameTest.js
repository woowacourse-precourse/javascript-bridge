const { describe, expect, test } = require('@jest/globals');
const { Console } = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeGame = require('../src/BridgeGame');

let crossingOrder = [];
let bridge = ['U', 'D', 'D', 'U'];
let attemptCount = 1;

const moveMockFn = jest.fn((direction) => {
  crossingOrder.push([direction, direction === 'U' ? 0 : 1]);
});

const isFailMockFn = jest.fn(() => {
  const idx = crossingOrder.length - 1;

  return bridge[idx] !== crossingOrder[idx][0];
});

const isLastMockFn = jest.fn(() => {
  return bridge.length === crossingOrder.length;
});

const retryMockFn = jest.fn(() => {
  attemptCount += 1;
  crossingOrder = [];
});

const getResultMockFn = jest.fn(() => {
  const isSuccess = !isFailMockFn() && isLastMockFn();

  return { isSuccess, attemptCount };
});

describe('move 메서드 테스트', () => {
  test('move 메서드가 실행되면 crossingOrder 요소가 1씩 증가한다.', () => {
    moveMockFn('U');

    expect(crossingOrder).toHaveLength(1);
    crossingOrder = [];
  });

  test('move 메서드가 3번 실행되면 crossingOrder의 길이는 3이다.', () => {
    ['U', 'D', 'D'].forEach((dircetion) => moveMockFn(dircetion));

    expect(crossingOrder).toHaveLength(3);
    crossingOrder = [];
  });

  test('crossingOrder의 요소의 첫번째 요소는 문자열 방향이다.', () => {
    moveMockFn('U');

    expect(crossingOrder[0][0]).toEqual('U');
    crossingOrder = [];
  });

  test('crossingOrder의 요소의 두번째 요소는 숫자이며 0은 U, 1은 D를 의미한다.', () => {
    moveMockFn('U');

    expect(crossingOrder[0][1]).toEqual(0);
    crossingOrder = [];
  });
});

describe('getBridgeCrossingResult 메서드 테스트', () => {
  test('방향을 입력한 횟수 만큼 호출된다.', () => {
    const app = new App();
    const bridgeGame = new BridgeGame(['U', 'D', 'D']);

    app.bridgeGame = bridgeGame;

    const crossingResultspy = jest.spyOn(bridgeGame, 'getBridgeCrossingResult');

    Console.readLine = jest.fn();
    Console.readLine
      .mockImplementationOnce((_, callback) => {
        callback('U');
      })
      .mockImplementationOnce((_, callback) => {
        callback('D');
      });

    app.requestDirection();

    expect(crossingResultspy).toHaveBeenCalledTimes(2);
  });

  test('메서드가 반환한 배열은 항상 길이가 2이다.', () => {
    const app = new App();
    const bridgeGame = new BridgeGame(['U', 'D', 'D']);

    app.bridgeGame = bridgeGame;

    const crossingResultspy = jest.spyOn(bridgeGame, 'getBridgeCrossingResult');

    crossingResultspy.mockClear();

    Console.readLine = jest.fn();
    Console.readLine
      .mockImplementationOnce((_, callback) => {
        callback('U');
      })
      .mockImplementationOnce((_, callback) => {
        callback('D');
      });

    app.requestDirection();

    crossingResultspy.mock.results.forEach(({ value }) => {
      expect(value).toHaveLength(2);
    });
  });

  test('첫번째 요소는 위쪽의 다리를 뜻하며 두번째 요소는 아래쪽의 다리를 뜻한다. 한 턴에 하나의 다리만 선택할 수 있으며 선택받지 않은 다리는 공백을 한 칸 가진 빈 문자열을 요소로 가진다.', () => {
    const app = new App();
    const bridgeGame = new BridgeGame(['U', 'D', 'D']);

    app.bridgeGame = bridgeGame;

    const crossingResultspy = jest.spyOn(bridgeGame, 'getBridgeCrossingResult');

    crossingResultspy.mockClear();

    Console.readLine = jest.fn();
    Console.readLine.mockImplementationOnce((_, callback) => {
      callback('U');
    });

    app.requestDirection();

    crossingResultspy.mock.results.forEach(({ value }) => {
      expect(value[1]).toEqual([' ']);
    });
  });

  test('건널 수 있는 다리는 O를 표시한다.', () => {
    const app = new App();
    const bridgeGame = new BridgeGame(['U', 'D', 'D']);

    app.bridgeGame = bridgeGame;

    const crossingResultspy = jest.spyOn(bridgeGame, 'getBridgeCrossingResult');

    crossingResultspy.mockClear();

    Console.readLine = jest.fn();
    Console.readLine
      .mockImplementationOnce((_, callback) => {
        callback('U');
      })
      .mockImplementationOnce((_, callback) => {
        callback('D');
      });

    app.requestDirection();

    const lastIdx = crossingResultspy.mock.results.length - 1;

    const result = crossingResultspy.mock.results[lastIdx].value;

    expect(result[0][0]).toEqual('O');
    expect(result[1][1]).toEqual('O');
  });

  test('건널 수 없는 다리는 X를 표시한다.', () => {
    const app = new App();
    const bridgeGame = new BridgeGame(['U', 'D', 'D']);

    app.bridgeGame = bridgeGame;

    const crossingResultspy = jest.spyOn(bridgeGame, 'getBridgeCrossingResult');

    crossingResultspy.mockClear();

    Console.readLine = jest.fn();
    Console.readLine
      .mockImplementationOnce((_, callback) => {
        callback('U');
      })
      .mockImplementationOnce((_, callback) => {
        callback('U');
      });

    app.requestDirection();

    const lastIdx = crossingResultspy.mock.results.length - 1;

    const result = crossingResultspy.mock.results[lastIdx].value;

    expect(result[0][1]).toEqual('X');
  });
});

describe('isFail 메서드 테스트', () => {
  test.each([[['U', 'D', 'U']], [['U', 'D', 'D', 'D']]])(
    'crossingOrder 배열의 마지막 요소의 문자열 방향과 같은 위치의 bridge 요소가 다르다면 true를 반환한다.',
    (array) => {
      array.forEach((dircetion) => moveMockFn(dircetion));

      expect(isFailMockFn()).toBeTruthy();
      crossingOrder = [];
    }
  );

  test('다리 건너기가 끝까지 성공하면 false를 반환한다.', () => {
    ['U', 'D', 'D', 'U'].forEach((dircetion) => moveMockFn(dircetion));

    expect(isFailMockFn()).toBeFalsy();
    crossingOrder = [];
  });
});

describe('isLast 메서드 테스트', () => {
  test('#bridge의 길이와 #crossingOrder의 길이가 다르다면 false를 반환한다.', () => {
    ['U', 'D', 'D'].forEach((dircetion) => moveMockFn(dircetion));

    expect(isLastMockFn()).toBeFalsy();
    crossingOrder = [];
  });

  test('#bridge의 길이와 #crossingOrder의 길이가 다르다면 false를 반환한다.', () => {
    ['U', 'D', 'D', 'U'].forEach((dircetion) => moveMockFn(dircetion));

    expect(isLastMockFn()).toBeTruthy();
  });
});

describe('retry 메서드 테스트', () => {
  test.each([
    [1, 2],
    [3, 4],
    [5, 6],
  ])(
    'retry 메서드가 호출되면 attemptCount는 1증가한다. 호출 횟수: %d',
    (num, count) => {
      for (let i = 0; i < num; i++) {
        retryMockFn();
      }

      expect(attemptCount).toEqual(count);

      attemptCount = 1;
    }
  );

  test('retry 메서드가 호출되면 crossingOrder는 빈 배열이 된다.', () => {
    moveMockFn('U');
    moveMockFn('U');
    moveMockFn('D');

    retryMockFn();

    expect(crossingOrder).toHaveLength(0);

    attemptCount = 1;
  });
});

describe('getResult 메서드 테스트', () => {
  test.each([
    [['D'], false],
    [['U', 'U'], false],
    [['U', 'D', 'D', 'U'], true],
  ])('재시도가 없을 때의 반환값 테스트', (array, boolean) => {
    const app = new App();
    const bridgeGame = new BridgeGame(['U', 'D', 'D', 'U']);

    app.bridgeGame = bridgeGame;

    crossingOrder = [];

    array.forEach((dircetion) => {
      moveMockFn(dircetion);
    });

    getResultMockFn();

    expect(getResultMockFn()).toEqual({
      isSuccess: boolean,
      attemptCount: 1,
    });
  });

  test('재시도가 있을 때의 반환값 테스트', () => {
    const app = new App();
    const bridgeGame = new BridgeGame(['U', 'D', 'D', 'U']);

    app.bridgeGame = bridgeGame;

    crossingOrder = [];

    ['U', 'U'].forEach((dircetion) => {
      moveMockFn(dircetion);
    });

    retryMockFn();

    ['U', 'D', 'U'].forEach((dircetion) => {
      moveMockFn(dircetion);
    });

    retryMockFn();

    ['U', 'D', 'D', 'U'].forEach((dircetion) => {
      moveMockFn(dircetion);
    });

    getResultMockFn();

    expect(getResultMockFn()).toEqual({
      isSuccess: true,
      attemptCount: 3,
    });
  });
});
