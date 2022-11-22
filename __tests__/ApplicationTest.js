const MissionUtils = require('@woowacourse/mission-utils');
const { GameConfig } = require('../src/Config');
const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');
const InputView = require('../src/InputView');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) => acc.mockImplementationOnce((_, callback) => { callback(input); }),
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
    const mockGenerator = randomNumbers.reduce(
      (acc, number) => acc.mockReturnValueOnce(number),
      jest.fn(),
    );

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D']);
  });

  test.each([
    [
      [1, 0, 1],
      ['3', 'U', 'D', 'U'],
      [
        '최종 게임 결과',
        '[ O |   | O ]',
        '[   | O |   ]',
        '게임 성공 여부: 성공',
        '총 시도한 횟수: 1',
      ],
      ['[ O |   | O ]', '[   | O |   ]'],
    ],
    [
      [1, 0, 0],
      ['0x12', '121687', '3', 'U', '', 'U', 'R', 'U', 'D', 'D'],
      [
        '최종 게임 결과',
        '[ O |   |   ]',
        '[   | O | O ]',
        '게임 성공 여부: 성공',
        '총 시도한 횟수: 2',
      ],
      ['[ O |   |   ]', '[   | O | O ]'],
    ],
    [
      [1, 0, 0],
      ['3', 'U', 'U', 'QQ', '한글', 'Q'],
      [
        '최종 게임 결과',
        '[ O | X ]',
        '[   |   ]',
        '게임 성공 여부: 실패',
        '총 시도한 횟수: 1',
      ],
      ['[ O | X ]', '[   |   ]'],
    ],
  ])('기능 테스트', (bridge, inputs, solutionLog, solutionBridge) => {
    const logSpy = getLogSpy();
    mockRandoms(bridge);
    mockQuestions(inputs);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, solutionLog);
    expectBridgeOrder(log, ...solutionBridge);
  });

  test('예외 테스트', () => {
    runException(['a']);
  });
});

describe('입력 받아오기 테스트', () => {
  test.each([
    [['3'], 3, InputView.readBridgeSize],
    [['woowa', '0x13', '12.345', '20'], 20, InputView.readBridgeSize],
    [['Q', '0', 'U'], 'U', InputView.readMoving],
    [['X', 'D', 'U', '121687', 'Q'], 'Q', InputView.readGameCommand],
  ])('정상', (inputs, solution, inputFunction) => {
    mockQuestions(inputs);
    expect(App.requestUserInput(inputFunction)).toEqual(solution);
  });

  test.each([
    [['a'], InputView.readBridgeSize],
    [new Array(123).fill('\n'), InputView.readMoving],
    [new Array(123).fill(' '), InputView.readGameCommand],
  ])('예외 다리 길이 입력: 너무 많이 틀렸을 경우', (inputs, inputFunction) => {
    mockQuestions(inputs);
    expect(() => App.requestUserInput(inputFunction)).toThrow('[ERROR]');
  });
});

describe('단판전 진행 테스트', () => {
  test.each([
    [
      ['U', 'D', 'U'],
      GameConfig.STATUS_SUCCESS,
      [
        '[ O ]',
        '[   ]',
        '[ O |   ]',
        '[   | O ]',
        '[ O |   | O ]',
        '[   | O |   ]',
      ],
    ],
    [
      ['U', 'U'],
      GameConfig.STATUS_FAIL,
      [
        '[ O ]',
        '[   ]',
        '[ O | X ]',
        '[   |   ]',
      ],
    ],
  ])('단판전 진행', (directions, solutionStatus, solutionLog) => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(directions);

    const app = new App();
    app.startGame(3);
    const result = app.playSingleGame();

    const log = getOutput(logSpy);
    expectLogContains(log, solutionLog);
    expectBridgeOrder(
      log,
      solutionLog[solutionLog.length - 2],
      solutionLog[solutionLog.length - 1],
    );
    expect(result).toEqual(solutionStatus);
  });
});
