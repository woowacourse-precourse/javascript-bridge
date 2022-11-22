const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = numbers => {
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

const getOutput = logSpy => {
  return [...logSpy.mock.calls].join('');
};

const runException = inputs => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

const expectLogContains = (received, logs) => {
  logs.forEach(log => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe("다리 건너기 테스트", () => {
  test("다리 생성 테스트", () => {
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
    mockQuestions(["3", "U", "D", "U"]);

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
});

describe('다리 건너기 테스트', () => {
  test('재시도 후 성공으로 게임 종료하기', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 1, 1, 1, 1]);
    mockQuestions([
      '5',
      'U',
      'D',
      'R',
      'U',
      'U',
      'D',
      'R',
      'U',
      'U',
      'U',
      'D',
      'R',
      'U',
      'U',
      'U',
      'U',
      'D',
      'R',
      'U',
      'U',
      'U',
      'U',
      'U',
    ]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O | O | O | O | O ]',
      '[   |   |   |   |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 5',
    ]);
    expectBridgeOrder(log, '[ O | O | O | O | O ]', '[   |   |   |   |   ]');
  });

  test('재시도 후 실패로 게임 종료하기', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 1, 1, 1, 1]);
    mockQuestions([
      '5',
      'U',
      'D',
      'R',
      'U',
      'U',
      'D',
      'R',
      'U',
      'U',
      'U',
      'D',
      'R',
      'U',
      'U',
      'U',
      'U',
      'D',
      'R',
      'U',
      'U',
      'U',
      'U',
      'D',
      'Q',
    ]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O | O | O | O |   ]',
      '[   |   |   |   | X ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 5',
    ]);
    expectBridgeOrder(log, '[ O | O | O | O |   ]', '[   |   |   |   | X ]');
  });

  test('재시도 후 오답으로 게임을 중간에 종료하기', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 1, 1, 1, 1]);
    mockQuestions(['5', 'U', 'D', 'R', 'U', 'U', 'D', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O | O |   ]',
      '[   |   | X ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 2',
    ]);
    expectBridgeOrder(log, '[ O | O |   ]', '[   |   | X ]');
  });

  test('잘못된 입력을 포함시키고 재시도 후 성공으로 게임 종료하기', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 0, 1]);
    mockQuestions(['3', 'D', 'd', 'U', 'R', 'D', 'D', 'D', 'r', 'R', 'D', 'D', 'u', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O | O |   ]',
      '[   |   | O ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 3',
    ]);
    expectBridgeOrder(log, '[ O | O | O ]', '[   |   |   ]');
  });

  test('잘못된 입력을 포함시키고 재시도 후 실패로 게임 종료하기', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 1, 0]);
    mockQuestions(['3', 'd', 'D', 'u', 'D', 'R', 'D', 'U', 'U', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[   | O | X ]',
      '[ O |   |   ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 2',
    ]);
    expectBridgeOrder(log, '[   | O | X ]', '[ O |   |   ]');
  });

  test('재시도 없이 성공으로 게임 종료하기', () => {
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

  test('재시도 없이 실패로 게임 종료하기', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'D', 'D', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O |   |   ]',
      '[   | O | X ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 1',
    ]);
    expectBridgeOrder(log, '[ O |   |   ]', '[   | O | X ]');
  });

  test('게임 시작 후 오답으로 재시도 없이 종료하기', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 0, 1, 0]);
    mockQuestions(['4', 'U', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, ['최종 게임 결과', '[ X ]', '[   ]', '게임 성공 여부: 실패', '총 시도한 횟수: 1']);
    expectBridgeOrder(log, '[ X ]', '[   ]');
  });

  test('게임 시작 후 오답으로 한 번 재시도 후 오답으로 종료하기', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 0, 1, 0]);
    mockQuestions(['4', 'U', 'R', 'D', 'U', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, ['최종 게임 결과', '[   | X ]', '[ O |   ]', '게임 성공 여부: 실패', '총 시도한 횟수: 2']);
    expectBridgeOrder(log, '[   | X ]', '[ O |   ]');
  });

  test('잘못된 다리 길이 입력을 포함시키고 재시도 없이 성공으로 게임 종료하기', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 0, 1, 0]);
    mockQuestions(['1', '0', '', '4', 'D', 'D', 'U', 'D']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[   |   | O |   ]',
      '[ O | O |   | O ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 1',
    ]);
    expectBridgeOrder(log, '[   |   | O |   ]', '[ O | O |   | O ]');
  });

  test('잘못된 다리 길이 입력을 포함시키고 재시도 없이 실패로 게임 종료하기', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 0, 1, 0]);
    mockQuestions(['1', '2', '03', '4', 'D', 'D', 'U', 'U', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[   |   | O | X ]',
      '[ O | O |   |   ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 1',
    ]);
    expectBridgeOrder(log, '[   |   | O | X ]', '[ O | O |   |   ]');
  });
});
