const MissionUtils = require("@woowacourse/mission-utils");
const {
  bridgeLength,
  bridgeDirection,
  gameContinue,
} = require("../src/utils/validate");

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

const runExceptionBridgeLength = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  bridgeLength(inputs, () => {});
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
  bridgeDirection(inputs, () => {});
  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const runExceptionCommand = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  gameContinue(inputs, () => {});
  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

describe("유효성 검사", () => {
  test("잘못된 방향 입력", () => {
    runExceptionMoving(["3"]);
  });

  test("잘못된 command 입력", () => {
    runExceptionCommand(["a"]);
  });

  test("문자열로 다리길이 입력", () => {
    runExceptionBridgeLength(["가나다라"]);
  });

  test("범위 밖의 다리길이 입력", () => {
    runExceptionBridgeLength([27]);
  });
});
