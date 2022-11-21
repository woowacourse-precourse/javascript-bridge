const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = answers => {
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

const getOutput = logSpy => {
  return [...logSpy.mock.calls].join('');
};

const expectLogContains = (received, logs) => {
  logs.forEach(log => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe('다리 길이 예외 테스트', () => {
  test('다리 길이가 문자인 경우', () => {
    mockQuestions(['1']);
    const logSpy = getLogSpy();
    const app = new App();

    app.getBridgeSize();

    expectLogContains(getOutput(logSpy), ['[ERROR]']);
  });

  test('다리 길이에 3이상 20이내의 숫자가 아닌 경우', () => {
    mockQuestions([2]);
    const logSpy = getLogSpy();
    const app = new App();

    app.getBridgeSize();

    expectLogContains(getOutput(logSpy), ['[ERROR]']);
  });

  test('빈 값인 경우', () => {
    mockQuestions(['']);
    const logSpy = getLogSpy();
    const app = new App();

    app.getBridgeSize();

    expectLogContains(getOutput(logSpy), ['[ERROR]']);
  });
});

describe('이동할 칸 입력 예외 테스트', () => {
  test('U 또는 D를 입력하지 않은 경우', () => {
    mockQuestions(['A']);
    const logSpy = getLogSpy();
    const app = new App();

    app.getMoving();

    expectLogContains(getOutput(logSpy), ['[ERROR]']);
  });

  test('빈 값인 경우', () => {
    mockQuestions(['']);
    const logSpy = getLogSpy();
    const app = new App();

    app.getMoving();

    expectLogContains(getOutput(logSpy), ['[ERROR]']);
  });
});

describe('재시작/종료 입력 예외 테스트', () => {
  test('R 또는 Q를 입력하지 않은 경우', () => {
    mockQuestions(['A']);
    const logSpy = getLogSpy();
    const app = new App();

    app.askRetryOrEnd();

    expectLogContains(getOutput(logSpy), ['[ERROR]']);
  });

  test('빈 값인 경우', () => {
    mockQuestions(['']);
    const logSpy = getLogSpy();
    const app = new App();

    app.askRetryOrEnd();

    expectLogContains(getOutput(logSpy), ['[ERROR]']);
  });
});
