const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
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

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe('InputView 테스트', () => {
  test('범위에 벗어난 다리 길이', () => {
    runException(['1', '21', '0', '-100']);
  });

  //TODO [위/아래] 관련 메서드 테스트 코드 작성

  //TODO [재도전/종료] 관련 메서드 테스트 코드 작성
});
