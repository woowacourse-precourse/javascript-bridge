const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const BridgeMaker = require("../src/BridgeMaker");
const { ERROR_MESSAGES_BRIDGE } = require('../src/Messages');
const InputView = require('../src/InputView');

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
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
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

describe("다리 건너기 테스트", () => {
  test("다리 생성 테스트", () => {
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D"]);
  });

  test("기능 테스트", () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(["3", "U", "D", "U"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[ O |   | O ]",
      "[   | O |   ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 1",
    ]);
    expectBridgeOrder(log, "[ O |   | O ]", "[   | O |   ]");
  });

  test("예외 테스트", () => {
    runException(["a"]);
  });
});

describe('다리 길이 입력 예외 테스트', () => {
  test.each([[''], [' '], ['\n'], ['3 5']])('공백과 관련된 입력 예외 처리', (input) => {
    expect(() => {
      InputView.handleWrongBridgeSizeException(input);
    }).toThrow(ERROR_MESSAGES_BRIDGE.blank);
  });

  test.each([['a'], ['-15'], ['10.2']])('다리 길이 type이 옳지 않은 경우 예외 처리', (input) => {
    expect(() => {
      InputView.handleWrongBridgeSizeException(input);
    }).toThrow(ERROR_MESSAGES_BRIDGE.typeError);
  });

  test.each([['2'], ['21'], ['100'], ['0']])('3 이상 20 이하의 범위를 벗어난 경우 예외 처리', (input) => {
    expect(() => {
      InputView.handleWrongBridgeSizeException(input);
    }).toThrow(ERROR_MESSAGES_BRIDGE.outOfSize);
  });
});

describe('다리 생성 테스트2', () => {
  test('길이가 20인 다리 생성', () => {
    const randomNumbers = [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(20, mockGenerator);
    expect(bridge).toEqual(['D', 'U', 'U', 'D', 'D', 'U', 'U', 'D', 'D', 'U', 'U', 'D', 'D', 'U', 'U', 'D', 'D', 'U', 'U', 'D']);
  });
});

describe('이동 입력 예외 테스트', () => {
  test.each([[''], [' '], ['\n'], [' U'], [' R']])('공백과 관련된 입력 예외 처리', (input) => {
    expect(() => {
      InputView.hanldeWrongMovingException(input);
    }).toThrow(ERROR_MESSAGES_BRIDGE.wrongMoving);
  });

  test.each([['3'], ['1e3'], ['-10'], ['1.2'], ['Z'], ['u'], ['d']])('U 또는 D가 아닌 값이 입력된 경우 예외 처리', (input) => {
    expect(() => {
      InputView.hanldeWrongMovingException(input);
    }).toThrow(ERROR_MESSAGES_BRIDGE.wrongMoving);
  });
});

describe('다리 건너기 맵 출력 테스트', () => {
  test('라운드 별 결과 확인하는 경우', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 0, 1]);
    mockQuestions(['3', 'D', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '[   ]',
      '[ O ]',
      '[   |   ]',
      '[ O | O ]',
      '[   |   | O ]',
      '[ O | O |   ]',
    ]);
    expectBridgeOrder(log, '[   ]', '[ O ]');
    expectBridgeOrder(log, '[   |   ]', '[ O | O ]');
    expectBridgeOrder(log, '[   |   | O ]', '[ O | O |   ]');
  });

  test('마지막 라운드 출력만 확인 - 끝까지 도달한 경우', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1, 1, 0, 1, 1, 0, 1, 1]);
    mockQuestions(['10', 'U', 'D', 'U', 'U', 'D', 'U', 'U', 'D', 'U', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '[ O |   | O | O |   | O | O |   | O | O ]',
      '[   | O |   |   | O |   |   | O |   |   ]',
    ]);
    expectBridgeOrder(log, '[ O |   | O | O |   | O | O |   | O | O ]', '[   | O |   |   | O |   |   | O |   |   ]');
  });

  test('마지막 라운드 출력만 확인 - 중간에 틀린 경우', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1, 0, 1, 1, 1]);
    mockQuestions(['7', 'U', 'D', 'U', 'D', 'U', 'D']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '[ O |   | O |   | O |   ]',
      '[   | O |   | O |   | X ]',
    ]);
    expectBridgeOrder(log, '[ O |   | O |   | O |   ]', '[   | O |   | O |   | X ]');
  });
});

describe('다리 건너기 결과 출력 테스트 (재시작X)', () => {
  test('다리를 끝까지 건넌 경우 (다리 길이 20)', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]);
    mockQuestions(['20', 'D', 'D', 'U', 'D', 'D', 'U', 'D', 'D', 'U', 'D', 'D', 'U', 'D', 'D', 'U', 'D', 'D', 'U', 'D', 'D']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[   |   | O |   |   | O |   |   | O |   |   | O |   |   | O |   |   | O |   |   ]',
      '[ O | O |   | O | O |   | O | O |   | O | O |   | O | O |   | O | O |   | O | O ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 1',
    ]);
    expectBridgeOrder(log, '[   |   | O |   |   | O |   |   | O |   |   | O |   |   | O |   |   | O |   |   ]', '[ O | O |   | O | O |   | O | O |   | O | O |   | O | O |   | O | O |   | O | O ]');
  });

  test('다리를 건너다 실패한 경우', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 0, 1, 0, 0, 1]);
    mockQuestions(['6', 'D', 'D', 'U', 'D', 'U', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[   |   | O |   | X ]',
      '[ O | O |   | O |   ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 1',
    ]);
    expectBridgeOrder(log, '[   |   | O |   | X ]', '[ O | O |   | O |   ]');
  });
});

describe('재시작/종료 입력 예외 테스트', () => {
  test.each([[''], [' '], ['\n'], [' U'], [' R']])('공백과 관련된 입력 예외 처리', (input) => {
    expect(() => {
      InputView.hanldeWrongCommandException(input);
    }).toThrow(ERROR_MESSAGES_BRIDGE.wrongCommand);
  });

  test.each([['3'], ['1e3'], ['-10'], ['1.2'], ['U'], ['D'], ['Z'], ['r'], ['q']])('R 또는 Q가 아닌 값이 입력된 경우 예외 처리', (input) => {
    expect(() => {
      InputView.hanldeWrongCommandException(input);
    }).toThrow(ERROR_MESSAGES_BRIDGE.wrongCommand);
  });
});

describe('다리 건너기 결과 출력 테스트 (재시작O)', () => {
  test('재시작 1번 후 실패한 경우', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 0, 1]);
    mockQuestions(['3', 'U', 'R', 'D', 'U', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '[ X ]',
      '[   ]',
      '[   ]',
      '[ O ]',
      '[   | X ]',
      '[ O |   ]',
      '최종 게임 결과',
      '[   | X ]',
      '[ O |   ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 2',
    ]);
    expectBridgeOrder(log, '[ X ]', '[   ]');
    expectBridgeOrder(log, '[   | X ]', '[ O |   ]');
  });

  test('재시작 2번 후 성공한 경우', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 0, 1]);
    mockQuestions(['3', 'U', 'R', 'D', 'U', 'R', 'D', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '[ X ]',
      '[   ]',
      '[   ]',
      '[ O ]',
      '[   | X ]',
      '[ O |   ]',
      '[   ]',
      '[ O ]',
      '[   |   ]',
      '[ O | O ]',
      '[   |   | O ]',
      '[ O | O |   ]',
      '최종 게임 결과',
      '[   |   | O ]',
      '[ O | O |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 3',
    ]);
    expectBridgeOrder(log, '[ X ]', '[   ]');
    expectBridgeOrder(log, '[   | X ]', '[ O |   ]');
    expectBridgeOrder(log, '[   |   ]', '[ O | O ]');
    expectBridgeOrder(log, '[   |   | O ]', '[ O | O |   ]');
  });

  test('재시작 2번 후 마지막 다리에서 실패한 경우', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 0, 1]);
    mockQuestions(['3', 'U', 'R', 'D', 'U', 'R', 'D', 'D', 'D', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '[ X ]',
      '[   ]',
      '[   ]',
      '[ O ]',
      '[   | X ]',
      '[ O |   ]',
      '[   |   ',
      '[ O | O ]',
      '[   |   |   ]',
      '[ O | O | X ]',
      '최종 게임 결과',
      '[   |   |   ]',
      '[ O | O | X ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 3',
    ]);
    expectBridgeOrder(log, '[ X ]', '[   ]');
    expectBridgeOrder(log, '[   | X ]', '[ O |   ]');
    expectBridgeOrder(log, '[   |   ]', '[ O | O ]');
    expectBridgeOrder(log, '[   |   |   ]', '[ O | O | X ]');
  });
});
