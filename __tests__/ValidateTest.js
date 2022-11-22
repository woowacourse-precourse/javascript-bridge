const MissionUtils = require('@woowacourse/mission-utils');
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

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe('유효성 검사', () => {
  test('사용자가 이동시 입력한 값은 U 또는 D 여야합니다.', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 0]);
    mockQuestions(['3', 'U', 'd']);

    const app = new App();
    app.play();

    expectLogContains(getOutput(logSpy), ['[ERROR] 위 칸은 U, 아래 칸은 D 입니다.']);
  });

  test('재시작은 R, 종료는 Q 입니다.', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 0]);
    mockQuestions(['3', 'D', 'r']);

    const app = new App();
    app.play();

    expectLogContains(getOutput(logSpy), ['[ERROR] 재시작은 R, 종료는 Q 입니다.']);
  });
});
