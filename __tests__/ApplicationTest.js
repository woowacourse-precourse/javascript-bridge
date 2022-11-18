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

const bridgeSizeBlankException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), [ERROR_MESSAGES_BRIDGE.blank]);
};

const bridgeSizeTypeRunException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), [ERROR_MESSAGES_BRIDGE.typeError]);
};

const bridgeSizeOutOfSizeException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), [ERROR_MESSAGES_BRIDGE.outOfSize]);
};

const wrongMovingException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), [ERROR_MESSAGES_BRIDGE.wrongMoving]);
};

describe("다리 건너기 테스트", () => {
  test("다리 생성 테스트", () => {
    const randomNumbers = ["1", "0", "0"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D"]);
  });

  test("기능 테스트", () => {
    const logSpy = getLogSpy();
    mockRandoms(["1", "0", "1"]);
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
  test('다리 길이 입력이 공백인 경우', () => {
    bridgeSizeBlankException(['']);
  });

  test('다리 길이 입력이 공백 한칸인 경우', () => {
    bridgeSizeBlankException([' ']);
  });

  test('다리 길이 입력이 줄바꿈인 경우', () => {
    bridgeSizeBlankException(['\n']);
  });

  test('다리 길이 입력이 숫자 사이 공백이 있는 경우', () => {
    bridgeSizeBlankException(['3 5']);
  });

  test('다리 길이 입력이 문자인 경우', () => {
    bridgeSizeTypeRunException(['a']);
  });

  test('다리 길이 입력이 음수인 경우', () => {
    bridgeSizeTypeRunException(['-15']);
  });

  test('다리 길이 입력이 소수인 경우', () => {
    bridgeSizeTypeRunException(['10.5']);
  });

  test('입력된 다리 길이가 2인 경우', () => {
    bridgeSizeOutOfSizeException(['2']);
  });

  test('입력된 다리 길이가 21인 경우', () => {
    bridgeSizeOutOfSizeException(['21']);
  });
});

describe('다리 생성 테스트2', () => {
  test('길이가 20인 다리 생성', () => {
    const randomNumbers = ['0', '1', '1', '0', '0', '1', '1', '0', '0', '1', '1', '0', '0', '1', '1', '0', '0', '1', '1', '0'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(20, mockGenerator);
    expect(bridge).toEqual(['D', 'U', 'U', 'D', 'D', 'U', 'U', 'D', 'D', 'U', 'U', 'D', 'D', 'U', 'U', 'D', 'D', 'U', 'U', 'D']);
  });
});

describe('이동 입력 예외 테스트', () => {
  test('입력이 공백인 경우', () => {
    wrongMovingException(['5', '']);
  });

  test('입력이 공백 한칸인 경우', () => {
    wrongMovingException(['5', ' ']);
  });

  test('입력이 줄바꿈인 경우', () => {
    wrongMovingException(['5', '\n']);
  });

  test('입력에 공백이 있는 경우', () => {
    wrongMovingException(['5', ' U']);
  });

  test('입력이 숫자인 경우', () => {
    wrongMovingException(['5', '3']);
  });

  test('입력이 U 또는 D가 아닌 문자인 경우', () => {
    wrongMovingException(['5', 'Z']);
  });

  test('입력이 소문자 U인 경우', () => {
    wrongMovingException(['5', 'u']);
  });
});

describe('다리 건너기 맵 출력 테스트', () => {
  test('라운드 별 결과 확인하는 경우', () => {
    const logSpy = getLogSpy();
    mockRandoms(['0', '0', '1']);
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
    mockRandoms(['1', '0', '1', '1', '0', '1', '1', '0', '1', '1']);
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
    mockRandoms(['1', '0', '1', '0', '1', '1', '1']);
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
