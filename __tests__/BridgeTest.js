const bridgeGame = require("../src/BridgeGame");
const OutpuyView = require("../src/console/OutputView");
const InputView = require("../src/console/InputView");
const Message = require("../src/lib/Message");
const Bridge = require("../src/model/Bridge");
const WoowaBridge = require("../src/WoowaBridge");
const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};

const runException = (inputs) => {
  setTestInvOnce(inputs);
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

const setTestInvOnce = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("브릿지 다리 생성 테스트", () => {
  test("정수를 입력하면 해당 길이 만큼의 다리가 생성 됩니다", () => {
    const length = ["5"];
    setTestInvOnce(length);

    const woowaBridge = new WoowaBridge();
    woowaBridge.play();
    expect(woowaBridge.bridge.getOriginalBridge().length).toBe(5);
    expect(
      woowaBridge.bridge.getOriginalBridge().length
    ).not.toBeGreaterThanOrEqual(6);
    expect(
      woowaBridge.bridge.getOriginalBridge().length
    ).not.toBeLessThanOrEqual(2);
  });

  test("브짓지는 U와 D를 원소로 가집니다.", () => {
    const length = ["10"];
    setTestInvOnce(length);

    const woowaBridge = new WoowaBridge();
    woowaBridge.play();
    expect(woowaBridge.bridge.getOriginalBridge()).toContain("U", "D");
    expect(woowaBridge.bridge.getOriginalBridge()).toContainEqual("U", "D");
    expect(woowaBridge.bridge.getOriginalBridge()).not.toContain(/\d/);
  });

  test("길이입력에 문자가 들어가면 예외가 발생합니다.", () => {
    runException(["E"]);
  });

  test("길이입력에 소수점이 들어가면 예외가 발생합니다.", () => {
    runException(["0.5"]);
  });

  test("길이입력에 음수가 들어가면 예외가 발생합니다.", () => {
    runException(["-5"]);
  });

  test("길이가 범위를 벗어나면 예외가 발생합니다.", () => {
    runException(["2"]);
    runException(["21"]);
  });

  test("길이 입력에 계산식을 입력할 수 없습니다.", () => {
    runException(["2+3"]);
    runException([+"2+3"]);
  });
});

describe("브릿지 이동 테스트", () => {});
