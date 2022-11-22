const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const InputView = require("../src/InputView");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("InputView 테스트", () => {
  test("다리 길이로 문자가 들어가면 예외가 발생한다", () => {
    expect(() => {
      InputView.validateSize("A");
    }).toThrow("[ERROR]");
  });

  test("범위 이외의 숫가 들어가면 예외가 발생한다", () => {
    expect(() => {
      InputView.validateSize(21);
    }).toThrow("[ERROR]");
  });
});
