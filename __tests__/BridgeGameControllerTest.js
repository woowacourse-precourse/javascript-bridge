const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

describe('BridgeGameController 기능 테스트', () => {
  test('다리 길이 입력 시 유효하지 않은 값을 입력하면 예외가 발생한다', () => {
    const logSpy = getLogSpy();
    mockQuestions(['2']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, ['[ERROR]']);
  });

  test('이동 방향 입력 시 유효하지 않은 값을 입력하면 예외가 발생한다.', () => {
    const logSpy = getLogSpy();
    mockQuestions(['20', 'Up']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, ['[ERROR]']);
  });

  test('게임 커맨드 입력 시 유효하지 않은 값을 입력하면 예외가 발생한다', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'D', 'Quit']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, ['[ERROR]']);
  });
});

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
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
