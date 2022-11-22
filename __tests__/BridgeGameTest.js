const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR } = require('../src/constants');
const GameResult = require('../src/GameResult');
const App = require('../src/App');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join('');
};

const runException = (inputs) => {
  mockQuestions(inputs);
  const app = new App();

  app.play().then(() => {
    const logSpy = getLogSpy();
    expectLogContains(getOutput(logSpy), ['[ERROR]']);
  });
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe('플레이어 입력값의 유효성 검사', () => {
  test('게임 시작 메시지를 출력한다.', () => {
    const logSpy = getLogSpy();

    const app = new App();

    const log = getOutput(logSpy);

    app.play().then(() => {
      expectLogContains(log, [MESSAGE.ENTRY]);
    });
  });

  test('다리 길이 - 예외처리', () => {
    mockQuestions(['2', '31', '0']);
    const logSpy = getLogSpy();
    const app = new App();

    app.play().then(() => {
      expectLogContains(getOutput(logSpy), [ERROR.INPUT_BRIDGE_SIZE]);
    });
  });

  test('주어진 길이의 다리를 만든다', () => {
    mockQuestions(['4']);

    const app = new App();

    app.play().then(() => {
      // expect(app.bridgeGame.resultMap.getResultAsArray().length).toEqual(4);
    });
  });

  test('이동할 칸 - 예외처리', () => {
    mockQuestions(['a', 'B', 'C']);

    const logSpy = getLogSpy();

    const app = new App();

    app.getDirection().then(() => {
      expectLogContains(getOutput(logSpy), [ERROR.INPUT_MOVING_DIRECTION]);
    });
  });

  test('플레이어는 자신이 선택한 방향으로 이동한다.', () => {
    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'U', 'D', 'U']);

    const app = new App();

    app.play().then(() => {
      // expect([...app.bridgeGame.result.getResultAsArray()]).toEqual([
      //   [0, { machine: 'U', player: 'U' }],
      //   [1, { machine: 'D', player: 'D' }],
      //   [2, { machine: 'U', player: 'U' }],
      // ]);
    });
  });

  test('재시도 여부 - 예외처리', () => {
    mockQuestions(['K', 'V', 'C']);

    const logSpy = getLogSpy();

    const app = new App();

    app.getGameCommand().then(() => {
      expectLogContains(getOutput(logSpy), [ERROR.INPUT_GAME_COMMAND]);
    });
  });

  test('플레이어는 게임을 재시도한다.', () => {
    const result = new GameResult();

    result.generate(['U', 'D', 'U']);
    result.clear();

    expect(result.getResultAsArray()).toEqual([
      [0, { machine: 'U', player: null }],
      [1, { machine: 'D', player: null }],
      [2, { machine: 'U', player: null }],
    ]);
  });
});
