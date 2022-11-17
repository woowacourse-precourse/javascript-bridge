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
  test("다리 사이즈 입력 테스트", () => {
    mockQuestions(["3"]);
    function cb(input) {
      expect(input).toBe("3");
    }
    InputView.readBridgeSize(cb);
  });
  test("다리 건너는 방향 입력 테스트", () => {
    mockQuestions(["U"]);
    function cb(input) {
      expect(input).toBe("U");
    }
    InputView.readMoving(cb);
  });
  test("재시작 입력 테스트", () => {
    mockQuestions(["R"]);
    function cb(input) {
      expect(input).toBe("R");
    }
    InputView.readGameCommand(cb);
  });
});
