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

describe("InputView 테스트", () => {
  test("다리 사이즈 입력 숫자 테스트", () => {
    mockQuestions(["r"]);
    expect(() => {
      InputView.readBridgeSize();
    }).toThrow("[ERROR]");
  });
  test("다리 사이즈 입력 범위 테스트", () => {
    mockQuestions(["21"]);
    expect(() => {
      InputView.readBridgeSize();
    }).toThrow("[ERROR]");
  });
  test("다리 건너는 방향 유효 테스트", () => {
    mockQuestions(["R"]);
    expect(() => {
      InputView.readMoving();
    }).toThrow("[ERROR]");
  });
  test("재시작 입력 유효 테스트", () => {
    mockQuestions(["P"]);
    expect(() => {
      InputView.readGameCommand();
    }).toThrow("[ERROR]");
  });
});
