const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');
const Conversion = require('../src/utils/conversion');
const OutputView = require('../src/views/OutputView');

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

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

const getReadSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'readLine');
  logSpy.mockClear();
  return logSpy;
};

describe('다리 건너기 테스트', () => {
  test('건널수있는지 확인 테스트', () => {
    const randomNumbers = [1, 0, 0, 0];
    const answers = ['4', 'U', 'D', 'U'];
    mockRandoms(randomNumbers);
    mockQuestions(answers);
    const app = new App();
    app.play();
    expect(app.referee.bridgeGame.bridge.getCompareResult()).toEqual([
      ['O', 'N', 'X'],
      ['N', 'O', 'N'],
    ]);
  });
  test('재시작시 시도횟수 증가 확인 테스트', () => {
    const randomNumbers = [1, 0, 0, 0];
    const answers = ['4', 'U', 'D', 'U', 'R'];
    mockRandoms(randomNumbers);
    mockQuestions(answers);
    const app = new App();
    app.play();
    expect(app.referee.bridgeGame.getExecutionCount()).toEqual(2);
  });
  test('종료입력시 종료 테스트', () => {
    const randomNumbers = [1, 0, 0, 0];
    const answers = ['4', 'U', 'D', 'U', 'Q'];
    mockRandoms(randomNumbers);
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.play();
    }).not.toThrow();
  });
  test('결과 변환 테스트', () => {
    expect(Conversion.convertResult(['O', 'N', 'N'])).toEqual('[ O |   |   ]');
    expect(Conversion.convertResult(['N', 'O', 'X'])).toEqual('[   | O | X ]');
  });
});

describe('예외 처리 테스트', () => {
  test.each([['1'], ['q'], ['2'], ['D']])('다리 생성 예외 테스트', (input) => {
    runException([input]);
  });
  test.each([
    ['3', '1'],
    ['3', 'a'],
    ['3', 'd'],
    ['3', 'u'],
  ])('이동할 칸 입력 예외 테스트', (...arr) => {
    runException(arr);
  });
  test.each([
    ['3', 'U', 'D', '2'],
    ['3', 'U', 'D', 'q'],
    ['3', 'U', 'D', 'W'],
    ['3', 'U', 'D', 'r'],
  ])('재시작/종료 입력 예외 테스트', (...arr) => {
    const randomNumbers = [1, 0, 0];
    mockRandoms(randomNumbers);
    runException(arr);
  });
});
