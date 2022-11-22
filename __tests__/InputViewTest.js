const InputView = require("../src/InputView");
const MissionUtils = require("@woowacourse/mission-utils");
const Game = require("../src/BridgeGame");
const App = require("../src/App");

const mockQuestions = (answer) => {
  MissionUtils.Console.readLine = jest.fn();
  MissionUtils.Console.readLine.mockImplementationOnce((_, callback) => {
    callback(answer);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};

const runException = (input) => {
  mockQuestions(input);
  const logSpy = getLogSpy();
  const app = new App();
  app.play();
  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe("readBridgeSize 테스트", () => {
  test("다리길이 입력 예외 테스트: 범위를 넘는 수를 입력했을 때", () => {
    runException(1);
  });

  test("다리길이 입력 예외 테스트: 숫자가 아닌 문자를 입력했을 때", () => {
    runException("a");
  });

  test("다리길이 입력 예외 테스트: 실수를 입력했을 때", () => {
    runException(6.6);
  });

  test("유저 다리 선택 입력 예외 테스트: U와 D를 입력하지 않았을 때", () => {
    mockQuestions("A");
    const logSpy = getLogSpy();
    InputView.readMoving(new Game.BridgeGame(["U", "U", "U"]));
    expectLogContains(getOutput(logSpy), ["[ERROR]"]);
  });
});
