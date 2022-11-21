const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const BridgeMaker = require("../src/BridgeMaker");
const validateBridgeSize = require("../src/validation/validateBridgeSize");
const validateMoveUpOrDownAnswer = require("../src/validation/validateMoveUpOrDownAnswer");
const validateRetryCommand = require("../src/validation/validateRetryCommand");

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
    expectLogContains(log, ["최종 게임 결과", "[ O |   | O ]", "[   | O |   ]", "게임 성공 여부: 성공", "총 시도한 횟수: 1"]);
    expectBridgeOrder(log, "[ O |   | O ]", "[   | O |   ]");
  });

  test("예외 테스트", () => {
    runException(["a"]);
  });
});

describe("다리 건너기 추가 테스트", () => {
  test("실행 결과 예시1", () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 0]);
    mockQuestions(["3", "U", "U", "R", "U", "D", "D"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, ["최종 게임 결과", "[ O |   |   ]", "[   | O | O ]", "게임 성공 여부: 성공", "총 시도한 횟수: 2"]);
    expectBridgeOrder(log, "[ O |   |   ]", "[   | O | O ]");
  });

  test("실행 결과 예시2", () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 0]);
    mockQuestions(["3", "U", "U", "Q"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, ["최종 게임 결과", "[ O | X ]", "[   |   ]", "게임 성공 여부: 실패", "총 시도한 횟수: 1"]);
    expectBridgeOrder(log, "[ O | X ]", "[   |   ]");
  });
});

describe("예외 테스트", () => {
  test.each([["2"], ["21"], ["Q"]])("다리 사이즈를 입력할 때 유효하지 않은 값을 넣었을 때 에러 처리해야 한다.", (input) => {
    expect(() => {
      validateBridgeSize(input);
    }).toThrow("[ERROR]");
  });

  test.each([["u"], ["d"], ["UD"]])("게임 진행할 때 'U', 'D'외에 유효하지 않은 값을 넣었을 때 에러 처리해야 한다.", (input) => {
    expect(() => {
      validateMoveUpOrDownAnswer(input);
    }).toThrow("[ERROR]");
  });

  test.each([["r"], ["q"], ["RQ"]])("게임 재시도할지 물어볼 때 'R', 'Q'외에 유효하지 않은 값을 넣었을 때 에러 처리해야 한다.", (input) => {
    expect(() => {
      validateRetryCommand(input);
    }).toThrow("[ERROR]");
  });
});

describe("기능 목록 테스트", () => {
  test("게임 시작 문구를 출력한다.", () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.play();

    expectLogContains(getOutput(logSpy), ["다리 건너기 게임을 시작합니다."]);
  });

  test("다리 생성 테스트", () => {
    const numbers = [0, 0, 1];
    const mockFn = jest.fn();
    const generateRandomNumber = numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, mockFn);
    const bridge = BridgeMaker.makeBridge(3, generateRandomNumber);
    expect(bridge).toEqual(["D", "D", "U"]);
  });
});
