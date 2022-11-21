const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("../src/BridgeGame");

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
  const player = new BridgeGame(3,["U","D","D"]);

  player.isRetryOrQuit();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};
  
describe("게임 재시작 여부 테스트", () => {
  test("예외 테스트 - R,Q 가 아닌 경우", () => {
    runException(["r"]);
  });
  test("예외 테스트 - R,Q 가 아닌 경우", () => {
    runException(["A"]);
  });
  test("예외 테스트 - R,Q 가 아닌 경우", () => {
    runException([" "]);
  });
  test("예외 테스트 - 1글자가 아닌 경우", () => {
    runException(["RQ"]);
  });
  test("예외 테스트 - 1글자가 아닌 경우", () => {
    runException(["RR"]);
  });
});