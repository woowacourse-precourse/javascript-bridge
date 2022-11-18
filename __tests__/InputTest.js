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

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  InputView.readBridgeSize();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

describe("입력 테스트", () => {
  test("다리 길이가 숫자가 아닌 경우 예외 처리한다.", () => {
    runException(["a"]);
  });

  test("다리 길이가 3보다 작은 숫자인 경우 예외 처리한다.", () => {
    runException(["2"]);
  });

  test("다리 길이가 20보다 큰 숫자인 경우 예외 처리한다.", () => {
    runException(["21"]);
  });

  test("이동할 칸이 U나 P가 아닌 경우 예외 처리한다.", () => {
    mockQuestions(["A"]);

    expect(() => {
      InputView.readMoving();
    }).toThrow("[ERROR] 이동할 칸은 U과 P만 입력할 수 있습니다.");
  });

  test("게임 진행 옵션이 R이나 Q가 아닌 경우 예외 처리한다.", () => {
    mockQuestions(["T"]);

    expect(() => {
      InputView.readGameCommand();
    }).toThrow("[ERROR] 게임 진행 옵션은 R과 Q만 입력할 수 있습니다.");
  });
});
