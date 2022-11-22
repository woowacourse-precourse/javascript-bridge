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
  const player = new BridgeGame(["U","D","D"]);
    player.move(0);
  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};
  
describe("플레이어 이동 입력 테스트", () => {
  test("예외 테스트 - U,D 가 아닌 경우", () => {
    runException(["u","U"]);
  });
  test("예외 테스트 - U,D 가 아닌 경우", () => {
    runException(["A","U"]);
  });
  test("예외 테스트 - U,D 가 아닌 경우", () => {
    runException([" ","U"]);
  });
  test("예외 테스트 - 1글자가 아닌 경우", () => {
    runException(["UD","U"]);
  });
  test("예외 테스트 - 1글자가 아닌 경우", () => {
    runException(["UU","U"]);
  });
});