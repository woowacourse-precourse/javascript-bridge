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

describe("Input View 예외 테스트", () => {
  test("예외 테스트 - 1. 다리 길이가 문자일 때", () => {
    runException(["a"]);
  });

  test("예외 테스트 - 2. 다리 길이가 3 미만 20 초과일 때", () => {
    runException(["1", "50"]);
  });

  test("예외 테스트 - 3. 이동할 칸이 U 혹은 D가 아닐 때", () => {
    runException(["3", "5", "a"]);
  });

  test("예외 테스트 - 4. 재시작 여부가 Q 혹은 R이 아닐 때", () => {
    runException(["3", "U", "D", "X"]);
  });
});
