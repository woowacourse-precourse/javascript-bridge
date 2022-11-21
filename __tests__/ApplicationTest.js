const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');
const { INPUT_ERROR } = require('../src/utils/constants');

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

describe('다리 건너기 테스트', () => {
  test('다리 생성 테스트', () => {
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D']);
  });

  test('기능 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O |   | O ]',
      '[   | O |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 1',
    ]);
    expectBridgeOrder(log, '[ O |   | O ]', '[   | O |   ]');
  });

  test('예외 테스트', () => {
    runException(['a']);
  });

  // 추가한 테스트 코드
  const noRetryFailResult = [
    '최종 게임 결과',
    '[ O | X ]',
    '[   |   ]',
    '게임 성공 여부: 실패',
    '총 시도한 횟수: 1',
  ];
  test('재시도 없이 게임종료를 선택하여 다리건너기에 실패한 경우', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 0]);
    mockQuestions(['3', 'U', 'U', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, noRetryFailResult);
    expectBridgeOrder(log, '[ O | X ]', '[   |   ]');
  });

  const oneRetrySuccessResult = [
    '최종 게임 결과',
    '[ O |   |   ]',
    '[   | O | O ]',
    '게임 성공 여부: 성공',
    '총 시도한 횟수: 2',
  ];
  test('재시도 1번 후 다리건너기에 성공한 경우', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 0]);
    mockQuestions(['3', 'U', 'U', 'R', 'U', 'D', 'D']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, oneRetrySuccessResult);
    expectBridgeOrder(log, '[ O |   |   ]', '[   | O | O ]');
  });

  const oneRetryFailResult = [
    '최종 게임 결과',
    '[ O |   |   ]',
    '[   | O | X ]',
    '게임 성공 여부: 실패',
    '총 시도한 횟수: 2',
  ];
  test('재시도 1번 후 게임종료를 선택하여 다리건너기에 실패한 경우', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'D', 'R', 'U', 'D', 'D', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, oneRetryFailResult);
    expectBridgeOrder(log, '[ O |   |   ]', '[   | O | X ]');
  });

  const runInvalidInputException = (numbers, inputs, errorMessage) => {
    mockRandoms(numbers);
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const app = new App();

    app.play();

    expectLogContains(getOutput(logSpy), [errorMessage]);
  };

  test('이동할 칸을 잘못 입력했을 경우 예외 테스트', () => {
    runInvalidInputException([1, 0, 1], ['3', 'd'], INPUT_ERROR.moving);
  });

  test('게임명령어를 잘못 입력했을 경우 예외 테스트', () => {
    runInvalidInputException([1, 0, 1], ['3', 'D', 'r'], INPUT_ERROR.gameCommand);
  });
});
