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
  
describe("다리 길이 입력 테스트", () => {
  test("예외 테스트 - 길이가 범위를 벗어난 경우", () => {
    runException(["2"]);
  });
  test("예외 테스트 - 길이가 범위를 벗어난 경우", () => {
    runException(["22"]);
  });
  test("예외 테스트 - 숫자가 아닌 경우", () => {
    runException(["a"]);
  });
  test("예외 테스트 - 숫자가 아닌 경우", () => {
    runException(["?"]);
  });
  test("예외 테스트 - 숫자가 아닌 경우", () => {
    runException([" "]);
  });
});