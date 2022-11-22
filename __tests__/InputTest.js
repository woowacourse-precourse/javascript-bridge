const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

describe("유저 입력 테스트", () => {
  test("다리 길이가 숫자가 아니라면 예외가 발생한다", () => {
    runException(["a"]);
  });

  test("다리 길이가 3부터 20까지의 숫자가 아니라면 예외가 발생한다", () => {
    runException(["1"]);
  });

  test("방향이 'U' 또는 'D'가 아니라면 예외가 발생한다", () => {
    runException(["3", "K"]);
  });

  test("잘못된 방향 입력하면 재입력 받는다", () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "readLine");
    mockQuestions(["3", "K"]);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledTimes(3);
  });
});
