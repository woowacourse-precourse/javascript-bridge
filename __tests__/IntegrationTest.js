const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const { PRINT_MESSAGE, ERROR_MESSAGE, RULES } = require('../src/constants/index.js');

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

const getOutput2 = (logSpy) => {
  return logSpy.mock.calls.flat();
};

const expectLogContains = (received, logs) => {
  logs.forEach((log, index) => {
    expect(received[index]).toEqual(log);
  });
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe('다리 건너기 테스트', () => {
  test('기능 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput2(logSpy);
    expectLogContains(log, [
      PRINT_MESSAGE.WELLCOME,
      '[ O ]',
      '[   ]',
      '[ O |   ]',
      '[   | O ]',
      '[ O |   | O ]',
      '[   | O |   ]',
      PRINT_MESSAGE.RESULT_INFORMATION,
      '[ O |   | O ]',
      '[   | O |   ]',
      PRINT_MESSAGE.GAME_RESULT('성공'),
      PRINT_MESSAGE.TRY_COUNT('1'),
    ]);
    expectBridgeOrder(log, '[ O |   | O ]', '[   | O |   ]');
  });

  test('처음 다리 갯수에서 에러가 나는 경우', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['2', '3', 'U', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput2(logSpy);
    expectLogContains(log, [
      PRINT_MESSAGE.WELLCOME,
      ERROR_MESSAGE.INVALID_RANGE(RULES.MIN_BRIDGE_NUMBER, RULES.MAX_BRIDGE_NUMBER),
      '[ O ]',
      '[   ]',
      '[ O |   ]',
      '[   | O ]',
      '[ O |   | O ]',
      '[   | O |   ]',
      PRINT_MESSAGE.RESULT_INFORMATION,
      '[ O |   | O ]',
      '[   | O |   ]',
      PRINT_MESSAGE.GAME_RESULT('성공'),
      PRINT_MESSAGE.TRY_COUNT('1'),
    ]);
    expectBridgeOrder(log, '[ O |   | O ]', '[   | O |   ]');
  });

  test('예외처리 통합테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 1, 1]);
    mockQuestions(['dada', '2', '3', 'S', 'U', 'D', 'S', 'R', 'U', 'U', 'U']);

    const app = new App();
    app.play();

    const log = getOutput2(logSpy);
    expectLogContains(log, [
      PRINT_MESSAGE.WELLCOME,
      ERROR_MESSAGE.NON_NUMERIC_VALUE,
      ERROR_MESSAGE.INVALID_RANGE(RULES.MIN_BRIDGE_NUMBER, RULES.MAX_BRIDGE_NUMBER),
      ERROR_MESSAGE.INVALID_MOVE_INPUT,
      '[ O ]',
      '[   ]',
      '[ O |   ]',
      '[   | X ]',
      ERROR_MESSAGE.INVALID_RETRY_INPUT,
      '[ O ]',
      '[   ]',
      '[ O | O ]',
      '[   |   ]',
      '[ O | O | O ]',
      '[   |   |   ]',
      PRINT_MESSAGE.RESULT_INFORMATION,
      '[ O | O | O ]',
      '[   |   |   ]',
      PRINT_MESSAGE.GAME_RESULT('성공'),
      PRINT_MESSAGE.TRY_COUNT('2'),
    ]);
    expectBridgeOrder(log, '[ O | O | O ]', '[   |   |   ]');
  });

  test('기능 테스트 중도포기하는 경우', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'U', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput2(logSpy);
    expectLogContains(log, [
      PRINT_MESSAGE.WELLCOME,
      '[ O ]',
      '[   ]',
      '[ O | X ]',
      '[   |   ]',
      PRINT_MESSAGE.RESULT_INFORMATION,
      '[ O | X ]',
      '[   |   ]',
      PRINT_MESSAGE.GAME_RESULT('실패'),
      PRINT_MESSAGE.TRY_COUNT('1'),
    ]);
    expectBridgeOrder(log, '[ O | X ]', '[   |   ]');
  });

  test('기능 테스트 재시도를 한 이후 포기하는 경우', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'U', 'R', 'U', 'U', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput2(logSpy);
    expectLogContains(log, [
      PRINT_MESSAGE.WELLCOME,
      '[ O ]',
      '[   ]',
      '[ O | X ]',
      '[   |   ]',
      '[ O ]',
      '[   ]',
      '[ O | X ]',
      '[   |   ]',
      PRINT_MESSAGE.RESULT_INFORMATION,
      '[ O | X ]',
      '[   |   ]',
      PRINT_MESSAGE.GAME_RESULT('실패'),
      PRINT_MESSAGE.TRY_COUNT('2'),
    ]);
    expectBridgeOrder(log, '[ O | X ]', '[   |   ]');
  });
});
