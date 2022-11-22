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
const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};
const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe("에러 사항 테스트", () => {
  test("다리 길이 예외처리 테스트", () => {
    mockQuestions(["0"]);
    const logSpy = getLogSpy();
    InputView.readBridgeSize();
    expectLogContains(getOutput(logSpy), [
      "[ERROR] 3이상 20이하의 숫자만 입력바랍니다.",
    ]);
  });

  test("이동 칸 예외처리 테스트", () => {
    mockQuestions(["E"]);
    const logSpy = getLogSpy();
    InputView.readMoving();
    expectLogContains(getOutput(logSpy), ["[ERROR] U와 D 중 입력바랍니다."]);
  });

  test("커맨드 예외처리 테스트", () => {
    mockQuestions(["A"]);
    const logSpy = getLogSpy();
    InputView.readGameCommand();
    expectLogContains(getOutput(logSpy), ["[ERROR] R와 Q 중 입력바랍니다."]);
  });
});
