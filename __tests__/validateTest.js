const MissionUtils = require('@woowacourse/mission-utils');
const { run } = require('jest');
const App = require('../src/App');
const Error = require('../src/Error')

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

describe('다리 길이 입력값 유효성 검사', () => {
    test('다리의 길이가 3 미만인가?', () => {
        runException(['0', '2', '3'])
    })
    test('다리의 길이가 20 초과인가?', () => {
        runException(['21', '100', '20'])
    })
    test('입력값에 문자가 들어갓는가?', () => {
        runException(['a', ' ', 'A', '-', ',', '3'])
    })
})

describe('이동에 대한 유효성 검사', () => {
    test('올바른 문자열이 들어갔는지, U를 올바르게 입력하였는가', () => {
        runException(['3', 'u', 'd', 'a', 'U'])
    })

    test('올바른 문자열이 들어갔는지, D를 올바르게 입력하였는가', () => {
        runException(['3', 'u', 'd', 'a', 'D'])
    })
})

describe('재시작에 대한 유효성 검사', () => {
    test('R에 대한 유효성', () => {
        expect(() => {
            Error.validateReStart('R')
        }).not.toThrow()
    })

    test('Q에 대한 유효성', () => {
        expect(() => {
            Error.validateReStart('Q')
        }).not.toThrow()
    })

    test('다른 것을 입력했을 때 유효성', () => {
        expect(() => {
            Error.validateReStart('a')
        }).not.toThrow()
    })
})