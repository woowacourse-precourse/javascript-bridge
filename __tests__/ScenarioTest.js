const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = numbers => {
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

const getOutput = logSpy => {
  return [...logSpy.mock.calls].join('');
};

const runException = inputs => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

const expectLogContains = (received, logs) => {
  logs.forEach(log => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe('시나리오 테스트', () => {
  test('다리 생성 테스트', () => {
    const randomNumbers = [1, 0, 0, 1, 1, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(6, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D', 'U', 'U', 'D']);
  });

  test('재시도 시나리오', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 0]);
    mockQuestions(['3', 'U', 'U', 'R', 'U', 'D', 'D']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '다리 건너기 게임을 시작합니다.',
      '3',
      'U',
      '[ O ]',
      '[   ]',
      'U',
      '[ O | X ]',
      '[   |   ]',
      'R',
      'U',
      '[ O ]',
      '[   ]',
      'D',
      '[ O |   ]',
      '[   | O ]',
      'D',
      '[ O |   |   ]',
      '[   | O | O ]',
      '최종 게임 결과',
      '[ O |   |   ]',
      '[   | O | O ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 2',
    ]);
    expectBridgeOrder(log, '[ O |   |   ]', '[   | O | O ]');
  });

  test('실패 시나리오', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 0]);
    mockQuestions(['3', 'U', 'U', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '다리 건너기 게임을 시작합니다.',
      '3',
      'U',
      '[ O ]',
      '[   ]',
      'U',
      '[ O | X ]',
      '[   |   ]',
      'Q',
      '최종 게임 결과',
      '[ O | X ]',
      '[   |   ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 1',
    ]);
    expectBridgeOrder(log, '[ O | X ]', '[   |   ]');
  });
});
