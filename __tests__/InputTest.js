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
const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  InputView.readBridgeSize();
  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};
const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};
const runExceptionMoving = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  InputView.readMoving();
  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};
const runExceptionCommand = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  InputView.readGameCommand();
  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

describe("입력 테스트", () => {
  test("다리 길이 입력이 숫자가 아닌 경우 예외 처리한다.", () => {
    runException(["a"]);
  });

  test("다리 길이 입력 숫자가 3보다 작은 경우 예외 처리한다.", () => {
    runException(["1"]);
  });

  test("다리 길이 입력 숫자가 20보다 큰 경우 예외 처리한다.", () => {
    runException(["25"]);
  });

  test("이동 관련 유저의 입력이 대문자 U, D 가 아닌 경우 예외 처리한다.", () => {
    runExceptionMoving(["A"]);
  });

  test("재시작 입력 관련 유저의 입력이 대문자 R, Q 가 아닌 경우 예외 처리한다.", () => {
    runExceptionCommand(["a"]);
  });
});
