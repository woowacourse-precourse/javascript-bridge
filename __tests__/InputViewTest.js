const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../src/InputView");

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

const runException = (inputs, testFunction) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  testFunction();
  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe("InputView 테스트", () => {
  test("readBridgeSize 예외 테스트: 3-20사이 숫자가 아니면 발생", () => {
    runException(["a", 100, "!23"], InputView.readBridgeSize);
  });

  test("readMoving 예외 테스트: U나 D가 아니면 발생", () => {
    runException([1, "u", "d"], InputView.readMoving);
  });

  test("readGameCommand 예외 테스트: R나 Q가 아니면 발생", () => {
    runException([1, "r", "q", ""], InputView.readMoving);
  });
});
