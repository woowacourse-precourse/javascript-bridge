const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');
const { GAME_MESSAGE } = require('../src/Constants');

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

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

describe('다리 건너기 테스트', () => {
  test('다리 길이 8 생성 테스트', () => {
    const randomNumbers = [1, 0, 0, 1, 0, 1, 0, 1];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(8, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D', 'U', 'D', 'U', 'D', 'U']);
  });

  test('기능 테스트 1', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 0, 0, 0, 1, 1, 1, 1]);
    mockQuestions([
      '8',
      'U',
      'R',
      'D',
      'D',
      'D',
      'U',
      'R',
      'D',
      'U',
      'U',
      'U',
      'U',
    ]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      GAME_MESSAGE.retry,
      GAME_MESSAGE.retry,
      '최종 게임 결과',
      '[   |   |   |   | O | O | O | O ]',
      '[ O | O | O | O |   |   |   |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 3',
    ]);
    expectBridgeOrder(
      log,
      '[   |   |   |   | O | O | O | O ]',
      '[ O | O | O | O |   |   |   |   ]'
    );
  });

  test('기능 테스트 2', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 1, 1, 1, 1]);
    mockQuestions(['5', 'U', 'R', 'D', 'D', 'R', 'U', 'U', 'D', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      GAME_MESSAGE.retry,
      GAME_MESSAGE.retry,
      '최종 게임 결과',
      '[   | O | O |   ]',
      '[ O |   |   | X ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 3',
    ]);
    expectBridgeOrder(log, '[   | O | O |   ]', '[ O |   |   | X ]');
  });

  test('기능 테스트 3', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 1, 1]);
    mockQuestions(['3', 'D', 'U', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[   | O | O ]',
      '[ O |   |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 1',
    ]);
    expectBridgeOrder(log, '[   | O | O ]', '[ O |   |   ]');
  });

  test('예외 테스트 1', () => {
    runException(['0']);
  });

  test('예외 테스트 2', () => {
    runException(['3.3']);
  });

  test('예외 테스트 3', () => {
    runException(['-1']);
  });

  test('예외 테스트 4', () => {
    runException(['3', 'A']);
  });

  test('예외 테스트 5', () => {
    runException(['3', 'q']);
  });

  test('예외 테스트 6', () => {
    runException(['3', 'u']);
  });
});
