const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => acc.mockImplementationOnce((_, callback) => {
    callback(input);
  }), MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => [...logSpy.mock.calls].join('');

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

describe('다리 건너기 테스트', () => {
  test.each([
    [[1, 0, 1], ['3', 'D', 'R', 'D', 'Q'], [
      '최종 게임 결과',
      '[   ]',
      '[ X ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 2',
    ], '[   ]', '[ X ]'],
    [[1, 0, 1, 0], ['4', 'U', 'D', 'U', 'U', 'R', 'D', 'R', 'D', 'Q'], [
      '최종 게임 결과',
      '[   ]',
      '[ X ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 3',
    ], '[   ]', '[ X ]'],
    [[1, 0, 1, 0], ['4', 'U', 'D', 'U', 'U', 'R', 'D', 'Q'], [
      '[ O ]',
      '[   ]',
      '[ O |   ]',
      '[   | O ]',
      '[ O |   | O ]',
      '[   | O |   ]',
      '[ O |   | O | X ]',
      '[   | O |   |   ]',
      '[   ]',
      '[ X ]',
    ], '[   ]', '[ X ]'],
  ])('bridgeGame move test', (random, question, lg, up, down) => {
    const logSpy = getLogSpy();
    mockRandoms(random);
    mockQuestions(question);
    const app = new App();
    app.play();
    const log = getOutput(logSpy);
    expectLogContains(log, lg);
    expectBridgeOrder(log, up, down);
  });
});
