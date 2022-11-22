const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../src/View/InputView");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("InputView 테스트", () => {
  test("readBridgeSize 기능 테스트", () => {
    mockQuestions(["3"]);
    const length = InputView.readBridgeSize();
    expect(length).toEqual(3);
  });

  test("readMoving 기능 테스트", () => {
    mockQuestions(["U"]);
    const move = InputView.readMoving();
    expect(move).toEqual("U");
  });

  test("readGameCommand 기능 테스트", () => {
    mockQuestions(["R"]);
    const command = InputView.readGameCommand();
    expect(command).toEqual("R");
  });
});
