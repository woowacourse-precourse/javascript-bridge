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

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

describe("유저 입력 테스트", () => {
  test("다리 길이가 숫자가 아니라면 예외가 발생한다", () => {
    expect(() => {
      runException(["a"]);
    });
  });

  test("다리 길이가 3부터 20까지의 숫자가 아니라면 예외가 발생한다", () => {
    expect(() => {
      runException(["1"]);
    });
  });
});
