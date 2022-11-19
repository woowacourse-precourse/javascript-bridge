const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const InputView = require("../src/InputView");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeGame = require("../src/BridgeGame");
const Error = require("../src/ControlError");

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

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const runBridgeSizeException = (size) => {
  mockQuestions([size]);
  const logSpy = getLogSpy();
  InputView.readBridgeSize();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const runReadMovingException = () => {
  mockQuestions(["M"]);
  const logSpy = getLogSpy();
  InputView.readMoving(0, []);

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe("다리 건너기 테스트", () => {
  test("다리 생성 테스트", () => {
    const randomNumbers = ["1", "0", "0"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D"]);
  });

  test("기능 테스트", () => {
    const logSpy = getLogSpy();
    mockRandoms(["1", "0", "1"]);
    mockQuestions(["3", "U", "D", "U"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[ O |   | O ]",
      "[   | O |   ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 1",
    ]);
    expectBridgeOrder(log, "[ O |   | O ]", "[   | O |   ]");
  });

  test("예외 테스트", () => {
    runException(["a"]);
  });
  // 다리 사이즈가 3 ~ 20 사이의 수가 아니면 ERROR.
  test("다리 사이즈 예외 테스트", () => {
    runBridgeSizeException(1);
  });

  test("이동 칸 입력 예외 테스트", () => {
    runReadMovingException(1);
  });

  test("건널 수 있는 칸인지 비교 결과 확인 테스트", () => {
    const bridge = new BridgeGame(["U", "D", "D"]);
    const result = bridge.move(0, "U");
    expect(result).toEqual([["U", "O"]]);
  });

  test("건널 수 있는 칸인지 비교 결과 확인 테스트2", () => {
    const bridge = new BridgeGame(["U", "D", "D"]);
    const result = bridge.move(0, "D");
    expect(result).toEqual([["D", "X"]]);
  });

  test("게임 재시도 함수 retry 반환 값 확인 테스트", () => {
    const bridge = new BridgeGame(["U", "D", "D"]);
    const result = bridge.retry("R");
    expect(result).toEqual(true);
  });
});
