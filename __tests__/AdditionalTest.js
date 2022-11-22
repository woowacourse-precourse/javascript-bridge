const { Console, Random } = require('@woowacourse/mission-utils');
const App = require('../src/App');
const { Tile, GameCommand, SPAWNABLE_TILES } = require('../src/constants');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((_, callback) => {
        callback(input);
      }),
    Console.readLine,
  );
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
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

describe('다리 건너기 테스트', () => {
  test('짧은 다리 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 0, 1]);
    mockQuestions(['3', Tile.DOWN, Tile.DOWN, Tile.UP]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[   |   | O ]',
      '[ O | O |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 1',
    ]);
    expectBridgeOrder(log, '[   |   | O ]', '[ O | O |   ]');
  });

  test('여러 차례 실패', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 0, 1]);
    mockQuestions([
      '3',
      Tile.UP,
      GameCommand.RESET,
      Tile.UP,
      GameCommand.RESET,
      Tile.DOWN,
      Tile.DOWN,
      Tile.UP,
    ]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[   |   | O ]',
      '[ O | O |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 3',
    ]);
    expectBridgeOrder(log, '[   |   | O ]', '[ O | O |   ]');
  });

  test('실패한 상태로 종료', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 0, 1]);
    mockQuestions(['3', Tile.DOWN, Tile.UP, GameCommand.QUIT]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[   | X ]',
      '[ O |   ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 1',
    ]);
    expectBridgeOrder(log, '[   | X ]', '[ O |   ]');
  });

  test('마지막 타일에서 실패 후 종료', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 0, 1]);
    mockQuestions(['3', Tile.DOWN, Tile.DOWN, Tile.DOWN, GameCommand.QUIT]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[   |   |   ]',
      '[ O | O | X ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 1',
    ]);
    expectBridgeOrder(log, '[   |   |   ]', '[ O | O | X ]');
  });

  test('세 번 실패한 끝에 성공', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 0, 1]);
    mockQuestions([
      '3',
      Tile.UP,
      GameCommand.RESET,
      Tile.DOWN,
      Tile.UP,
      GameCommand.RESET,
      Tile.DOWN,
      Tile.DOWN,
      Tile.DOWN,
      GameCommand.RESET,
      Tile.DOWN,
      Tile.DOWN,
      Tile.UP,
      GameCommand.QUIT,
    ]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[   |   | O ]',
      '[ O | O |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 4',
    ]);
    expectBridgeOrder(log, '[   |   | O ]', '[ O | O |   ]');
  });

  test('긴 다리 테스트', () => {
    const logSpy = getLogSpy();
    const randoms = [0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1];
    mockRandoms(randoms);
    mockQuestions(['20', ...randoms.map((index) => SPAWNABLE_TILES[index]), GameCommand.QUIT]);

    const app = new App();
    app.play();

    const lines = [
      '[   |   | O | O |   | O |   |   | O |   |   |   | O | O |   | O | O | O | O | O ]',
      '[ O | O |   |   | O |   | O | O |   | O | O | O |   |   | O |   |   |   |   |   ]',
    ];

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      ...lines,
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 1',
    ]);
    expectBridgeOrder(log, ...lines);
  });

  test.each(['2', '21'])('잘못된 다리 길이 %p 테스트', (input) => {
    runException([input]);
  });
});
