const InputView = require("../src/view/InputView");
const MissionUtils = require("@woowacourse/mission-utils");
const BridgePlay = require("../src/BridgePlay");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe("입력 예외 처리 테스트", () => {
  
  test("다리 길이 입력 테스트", () => {
    mockQuestions(["2", "a"]);
    const logSpy = getLogSpy();
    InputView.readBridgeSize();
    expectLogContains(getOutput(logSpy), ["[ERROR] 다리 길이는 3", "[ERROR] 다리 길이는 숫자"]);
  });

  test("이동 칸 입력 테스트", () => {
    mockQuestions(["u"]);
    const logSpy = getLogSpy();
    InputView.readMoving();
    expectLogContains(getOutput(logSpy), ["[ERROR] 이동할"]);
  });

  test("종료 옵션 입력 테스트", () => {
    mockQuestions(["U","Q"]);
    const logSpy = getLogSpy();
    const bridgePlay = new BridgePlay([]);
    const spyFunc = jest.spyOn(bridgePlay, 'endOrRetry');

    InputView.readGameCommand(bridgePlay);

    expectLogContains(getOutput(logSpy), ["[ERROR] 종료", "최종 게임 결과"]);
    expect(spyFunc).toBeCalledWith("Q")
  });

});