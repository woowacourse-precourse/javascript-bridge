const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const { BRIDGE_GAME } = require('../src/constants/Game');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((_, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine,
  );
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
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

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

describe('예외 상황 테스트', () => {
  describe('[다리 길이]', () => {
    test('빈 값을 입력했을 경우', () => {
      runException(['']);
    });
    test('숫자가 아닌 값 입력했을 경우', () => {
      runException(['a']);
    });
    test(`${BRIDGE_GAME.RANGE.START}보다 작은 값 입력했을 경우`, () => {
      runException(['2']);
    });
    test(`${BRIDGE_GAME.RANGE.END}보다 큰 값 입력했을 경우`, () => {
      runException(['25']);
    });
  });

  describe('[이동할 칸]', () => {
    test('빈 값을 입력했을 경우', () => {
      runException(['12', '']);
    });
    test(`${Object.keys(BRIDGE_GAME.BLOCK).join(' ,')}가 아닌 값을 입력했을 경우`, () => {
      runException(['12', 'O']);
    });

    test('숫자를 입력했을 경우', () => {
      runException(['12', '5']);
    });
  });

  describe('[게임 다시 시도 여부]', () => {
    mockRandoms([1]);
    test('빈 값을 입력했을 경우', () => {
      runException(['12', 'U', '']);
    });

    test(`${Object.keys(BRIDGE_GAME.COMMAND).join(' ,')}이 아닌 값을 입력했을 경우`, () => {
      runException(['12', 'U', 'T']);
    });
  });
});
