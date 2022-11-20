const MissionUtils = require("@woowacourse/mission-utils");
const { ERROR_MESSAGE } = require("../src/constants/message");
const InputView = require("../src/InputView");
const Validation = require("../src/Validation");

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

describe("입력 테스트", () => {
  test("다리 길이 확인", () => {
    const logSpy = getLogSpy();
    mockQuestions(["3"]);
    InputView.readBridgeSize();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("3"));
  });

  test("다리 길이 입력이 숫자가 아닌 경우 예외 처리한다.", () => {
    expect(() => {
      Validation.isOnlyNumber("a");
    }).toThrow(ERROR_MESSAGE.NUMBER);
  });
});
