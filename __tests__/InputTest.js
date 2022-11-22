const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const Validate = require('../src/utils/validate');

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

describe('validation 테스트', () => {
  test('notNumber', () => {
    runException(['a'].map((el) => Validate.notNumber(el)));
  });
  test('notInRange', () => {
    runException(['1'].map((el) => Validate.notInRange(el)));
  });
  test('notInRange', () => {
    runException(['100'].map((el) => Validate.notInRange(el)));
  });
});
