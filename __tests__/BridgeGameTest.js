const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeGame = require('../src/BridgeGame');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((_, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine
  );
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
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

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe('Bridge Class 테스트', () => {
  test('종료조건 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'U', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, ['게임 성공 여부: 성공']);
  });

  test('실패 판단', () => {
    mockRandoms(['1', '0', '1']);

    const game = new BridgeGame();
    game.set(3, mockRandoms);
    const isRight = game.checkRightDirection('D');
    expect(isRight).toEqual(false);
  });

  test('출력 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms(['0', '0', '1']);
    mockQuestions(['3', 'D', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, ['[   |   | O ]', '[ O | O |   ]', '게임 성공 여부: 성공']);
    expectBridgeOrder(log, '[   |   | O ]', '[ O | O |   ]');
  });

  test('전체 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms(['0', '0', '1']);
    mockQuestions(['3', 'U', 'D', 'R', 'D', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '[ X ]',
      '[   ]',
      '[ERROR]',
      '[   |   | O ]',
      '[ O | O |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 2',
    ]);
    expectBridgeOrder(log, '[   |   | O ]', '[ O | O |   ]', '[   |   | O ]', '[ O | O |   ]');
  });
});
