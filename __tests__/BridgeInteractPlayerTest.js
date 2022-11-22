const BridgeInteractPlayer = require("../src/Bridge.Domain/BridgeInteractPlayer");
const MissionUtils = require("@woowacourse/mission-utils");

const bridgeInteractPlayer = new BridgeInteractPlayer();

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

const runException = (inputs, callFunc) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  callFunc();
  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe("다리 게임 사이즈 입력 예외 테스트", () => {
  const inputs = [["1"], ["2"], ["21"], ["30"], ["a"]];
  inputs.forEach((input) => {
    test("예외 테스트", () => {
      runException(
        input,
        bridgeInteractPlayer.playerInputBridgeSize.bind(bridgeInteractPlayer)
      );
    });
  });
});

describe("다리 게임 방향 입력 예외 테스트", () => {
  const inputs = [["1"], ["2"], ["A"], ["B"]];
  inputs.forEach((input) => {
    test("예외 테스트", () => {
      runException(
        input,
        bridgeInteractPlayer.playerInputBridgeDirection.bind(
          bridgeInteractPlayer
        )
      );
    });
  });
});

describe("다리 게임 커멘드 입력 예외 테스트", () => {
  const inputs = [["1"], ["2"]];
  inputs.forEach((input) => {
    test("예외 테스트", () => {
      runException(
        input,
        bridgeInteractPlayer.playerInputCommand.bind(bridgeInteractPlayer)
      );
    });
  });
});
