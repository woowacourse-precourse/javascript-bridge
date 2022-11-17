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
  test("다리 길이가 숫자가 아닌 경우 예외 처리한다.", () => {
    mockQuestions(["a"]);

    expect(() => {
      InputView.readBridgeSize();
    }).toThrow("[ERROR] 다리 길이는 숫자여야 합니다.");
  });

  test("다리 길이가 3보다 작은 숫자인 경우 예외 처리한다.", () => {
    mockQuestions(["2"]);

    expect(() => {
      InputView.readBridgeSize();
    }).toThrow("[ERROR] 다리 길이는 3 이상 20 이하인 숫자여야 합니다.");
  });

  test("다리 길이가 20보다 큰 숫자인 경우 예외 처리한다.", () => {
    mockQuestions(["21"]);

    expect(() => {
      InputView.readBridgeSize();
    }).toThrow("[ERROR] 다리 길이는 3 이상 20 이하인 숫자여야 합니다.");
  });

  test("이동할 칸이 U나 P가 아닌 경우 예외 처리한다.", () => {
    mockQuestions(["A"]);

    expect(() => {
      InputView.readMoving();
    }).toThrow("[ERROR] 이동할 칸은 U과 P만 입력할 수 있습니다.");
  });
});
