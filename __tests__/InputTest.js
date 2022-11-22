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

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};

const runExceptionBridgeLength = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();

  InputView.readBridgeSize();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const runExceptionMoving = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();

  InputView.readMoving();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe("다리 길이 입력 테스트", () => {
  test("다리 길이가 숫자가 아닌 경우 예외 처리한다.", () => {
    runExceptionBridgeLength(["d"]);
  });

  test("다리 길이가 3 이상 20 이하가 아닌 경우 예외 처리한다", () => {
    runExceptionBridgeLength(["2"]);
  });

  test("다리 길이가 3 이상 20 이하가 아닌 경우 예외 처리한다", () => {
    runExceptionBridgeLength(["21"]);
  });
});

describe("이동할 칸 입력 테스트", () => {
  test("이동할 칸이 U나 D가 아닌 경우 예외 처리한다.", () => {
    runExceptionMoving(["F"]);
  });

  test("이동할 칸이 U나 D가 아닌 경우 예외 처리한다.", () => {
    runExceptionMoving(["u"]);
  });
});
