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
  test("다리 길이 입력값 유효 테스트", () => {
    mockQuestions(["g"]);
    expect(() => {
      InputView.readBridgeSize();
    }).toThrow("[ERROR] 다리의 길이는 숫자만 입력해야 합니다.");
  });

  test("다리 길이가 3보다 작은 숫자인 경우 예외 처리한다.", () => {
    mockQuestions(["2"]);

    expect(() => {
      InputView.readBridgeSize();
    }).toThrow("[ERROR] 다리의 길이는 3 이상 20 이하여야 합니다.");
  });

  test("다리 길이가 20보다 큰 숫자인 경우 예외 처리한다.", () => {
    mockQuestions(["21"]);

    expect(() => {
      InputView.readBridgeSize();
    }).toThrow("[ERROR] 다리의 길이는 3 이상 20 이하여야 합니다.");
  });
});
