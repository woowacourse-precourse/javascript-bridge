const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const BridgeMaker = require("../src/BridgeMaker");
const InputView = require("../src/InputView");
const OutputView = require("../src/OutputView");

describe("InputView 기능 테스트", () => {
  test("다리 길이 입력 예외 테스트", () => {
    runException(["U"]);
    runException(["2"]);
  });

  test("이동 입력 예외 테스트", () => {
    runInputMovingException(["*"]);
    runInputMovingException(["2"]);
  });

  test("재시도 여부 입력 예외 테스트", () => {
    runInputRetryException([0]);
    runInputRetryException(["E"]);
  });
});

describe("OutputView 기능 테스트", () => {
  test("makeBridgeMap 메소드 테스트", () => {
    const logSpy = getLogSpy();
    OutputView.makeBridgeMap(1, ["U", "D", "D"], "DT");
    const log = getOutput(logSpy);

    expectBridgeOrder(log, "[ O |   ]", "[   | O ]");
  });

  test("printResult 메소드 테스트", () => {
    const logSpy = getLogSpy();
    OutputView.bridgeSave = ["D", "U", "D", "U"];
    OutputView.printResult(3, "DF", 2);
    const log = getOutput(logSpy);
    expectLogContains(log, ["최종 게임 결과", "게임 성공 여부: 실패", "총 시도한 횟수: 2"]);
    expectBridgeOrder(log, "[   | O |   |   ]", "[ O |   | O | X ]");
  });
});

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
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

const runInputMovingException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  InputView.readMoving(0);

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const runInputRetryException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  InputView.readGameCommand(0, "U");

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};
