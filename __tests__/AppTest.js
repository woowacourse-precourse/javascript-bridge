const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const { BRIDGE, COMMAND } = require('../src/constant/Bridge');
const { ERROR_MESSAGE } = require('../src/constant/Error');

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

describe('다리 건너기 테스트', () => {
  test('다리 건너기 실패 후 종료한다.', () => {
    const logSpy = getLogSpy();
    mockRandoms([BRIDGE.UPPER, BRIDGE.UPPER, BRIDGE.UPPER]);
    mockQuestions(['3', BRIDGE.UP, BRIDGE.UP, BRIDGE.DOWN, COMMAND.QUIT]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O | O |   ]',
      '[   |   | X ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 1'
    ]);
  });

  test('다리 건너기 실패 후 재시도해 성공한다.', () => {
    const logSpy = getLogSpy();
    mockRandoms([BRIDGE.UPPER, BRIDGE.UPPER, BRIDGE.UPPER]);
    mockQuestions([
      '3',
      BRIDGE.UP,
      BRIDGE.UP,
      BRIDGE.DOWN,
      COMMAND.RESTART,
      BRIDGE.UP,
      BRIDGE.UP,
      BRIDGE.UP
    ]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '[ O | O |   ]',
      '[   |   | X ]',
      '최종 게임 결과',
      '[ O | O | O ]',
      '[   |   |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 2'
    ]);
  });

  test('다리 길이를 잘못 입력해 예외가 발생한다.', () => {
    const logSpy = getLogSpy();
    mockQuestions(['2']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [ERROR_MESSAGE.BRIDGE_SIZE]);
  });

  test('이동할 칸을 잘못 입력해 예외가 발생한다.', () => {
    const logSpy = getLogSpy();
    mockRandoms([BRIDGE.UPPER, BRIDGE.UPPER, BRIDGE.UPPER]);
    mockQuestions(['3', 'u']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [ERROR_MESSAGE.SPACE]);
  });
});
