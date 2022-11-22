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

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

describe('다리 길이 입력에 대한 유효성 검사', () => {
  test('다리의 길이가 3이상 20이하인가?', () => {
    runException(['0', '2', '20', '21']);
  });

  test('다리 길이 입력의 숫자 이외의 것이 있는가?', () => {
    runException(['10', '1.', 'a', '1 ']);
  });
});

describe('이동 방향 입력에 대한 유효성 검사', () => {
  test('올바른 이동 방향을 입력했는가?', () => {
    runException(['u', 'd', ' U', 'D ']);
  });
});

describe('재시작 입력에 대한 유효성 검사', () => {
  test('재시작(R) 및 종료(Q)를 입력했는가?', () => {
    runException(['a', 's', 'R ', ' Q', '2']);
  });
});
