const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const inputView = require("../src/InputView")
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

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};
describe("입력값 테스트", () => {
  test("다리 길이 입력 테스트", () => {
    mockQuestions(['a']);
    const logSpy = getLogSpy();
    inputView.readBridgeSize();
    expectLogContains(getOutput(logSpy), ["[ERROR]"]);
  });

  test("다리 길이 범위 테스트", () => {
    mockQuestions(['2']);
    const logSpy = getLogSpy();
    inputView.readBridgeSize();
    expectLogContains(getOutput(logSpy), ["[ERROR]"]);
  });

  test("다리 이동 입력 테스트", () => {
    mockQuestions(['A']);
    const logSpy = getLogSpy();
    inputView.readMoving()
    expectLogContains(getOutput(logSpy), ["[ERROR]"]);
  });

  test("재시작 입력 테스트", () => {
    mockQuestions(['q']);
    const logSpy = getLogSpy();
    inputView.readGameCommand();
    expectLogContains(getOutput(logSpy), ["[ERROR]"]);
  });
});
