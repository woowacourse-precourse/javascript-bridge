const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('../src/views/InputView');

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

const EMPTY_CALLBACK = () => {};

const runException = (input, runCallback) => {
  mockQuestions([input]);
  const logSpy = getLogSpy();

  runCallback();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
  expect(MissionUtils.Console.readLine).toBeCalledTimes(2);
};

describe('입력값 검증 테스트 / 재입력 테스트', () => {
  it('다리 길이 입력 경계값 예외 테스트', () => {
    const answers = ['a', 1, 21];

    answers.forEach((answer) =>
      runException(answer, () => {
        InputView.readBridgeSize(EMPTY_CALLBACK);
      }),
    );
  });

  it('이동 위치 입력 예외 테스트', () => {
    const answers = ['a', 3, -1];

    answers.forEach((answer) =>
      runException(answer, () => {
        InputView.readMoving(EMPTY_CALLBACK);
      }),
    );
  });

  it('재입력 커멘드 입력 예외 테스트', () => {
    const answers = ['U', 3, -1];

    answers.forEach((answer) =>
      runException(answer, () => {
        InputView.readGameCommand(EMPTY_CALLBACK);
      }),
    );
  });
});
