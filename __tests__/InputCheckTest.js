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

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("입력 테스트", () => {
  test("다리 길이 테스트", () => {
    const logSpy = getLogSpy();
    mockQuestions(["3"]);

    InputView.readBridgeSize();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("3"));
  });

  test("입력값이 숫자가 아닌 경우 예외 처리한다.", () => {
    mockQuestions(["U"]);

    expect(() => {
      InputView.readBridgeSize();
    }).toThrow("[ERROR] 숫자만 입력해 주세요.");
  });

  test("입력값이 3보다 작을 경우 예외 처리한다.", () => {
    mockQuestions(["1"]);

    expect(() => {
      InputView.readBridgeSize();
    }).toThrow("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  });

  test("입력값이 20보다 클 경우 예외 처리한다.", () => {
    mockQuestions(["21"]);

    expect(() => {
      InputView.readBridgeSize();
    }).toThrow("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  });
});
