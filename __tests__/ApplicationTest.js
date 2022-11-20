const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const BridgeMaker = require("../src/BridgeMaker");

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
    const randomNumbers = ["1", "0", "0"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D"]);
  });

  
  test("다리 생성 테스트", () => {
    const randomNumbers = ["1", "0", "0", "0", "1", "0", "1", "0", "1", "1"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(randomNumbers.length, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D", "D", "U", "D", "U", "D", "U", "U"]);
  });

  test("기능 테스트1", () => {
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

  test("기능 테스트2", () => {
    const logSpy = getLogSpy();
    mockRandoms(["1", "0", "1"]);
    mockQuestions(["3", "A", "D", "R", "U", "D", "U"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[ O |   | O ]",
      "[   | O |   ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 2",
    ]);
    expectBridgeOrder(log, "[ O |   | O ]", "[   | O |   ]");
  });

  test("입력 예외 테스트1", () => {
    const logSpy = getLogSpy();
    mockRandoms(["1", "0", "1"]);
    mockQuestions(["3", "A", "D", "R", "U", "D", "U"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "[ERROR]",
    ]);
    expectBridgeOrder(log, "[ O |   | O ]", "[   | O |   ]");
  });


  test("입력 예외 테스트2", () => {
    const logSpy = getLogSpy();
    mockRandoms(["1", "0", "1"]);
    mockQuestions(["a", "3", "U", "D", "U"])

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "[ERROR]",
    ]);
    expectBridgeOrder(log, "[ O |   | O ]", "[   | O |   ]");
  });

  test("실패 후 종료 테스트1", () => {
    const logSpy = getLogSpy();
    mockRandoms(["1", "0", "1"]);
    mockQuestions(["3", "D", "Q"]);
  
    const app = new App();
    app.play();
  
    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[   ]",
      "[ X ]",
      "게임 성공 여부: 실패",
      "총 시도한 횟수: 1",
    ]);
    expectBridgeOrder(log, "[  ]", "[ X ]");
  });

  test("실패 후 종료 테스트2", () => {
    const logSpy = getLogSpy();
    mockRandoms(["1", "0", "1"]);
    mockQuestions(["3", "U", "U", "Q"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[ O | X ]",
      "[   |   ]",
      "게임 성공 여부: 실패",
      "총 시도한 횟수: 1",
    ]);
    expectBridgeOrder(log, "[ O | X ]", "[   |   ]");
  });

  test("다리 길이 예외 테스트", () => {
    runException(["a"]);
  });

  test("다리 길이 예외 테스트", () => {
    runException(["1"]);
  });

  test("다리 길이 예외 테스트", () => {
    runException(["25"]);
  });

  test("다리 길이 예외 테스트", () => {
    runException(["-1"]);
  });

  test("다리 길이 예외 테스트", () => {
    runException(["4.5"]);
  });

  test("이동할 칸 예외 테스트", () => {
    runException(["3", "7"]);
  });

  test("이동할 칸 예외 테스트", () => {
    runException(["3", "u"]);
  });
});
