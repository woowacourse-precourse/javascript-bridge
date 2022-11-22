const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const BridgeMaker = require("../src/BridgeMaker");

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

describe("정상 기능 테스트", () => {
  test("1. 다리 생성", () => {
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D"]);
  });

  test("2. 1번에 성공 (1 시도)", () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
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

  test("3. 1번 실패 / 1번 재시도(R) / 성공 (2 시도)", () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1, 1]);
    mockQuestions(["4", "U", "D", "D", "R", "U", "D", "U", "U"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[ O |   | O | O ]",
      "[   | O |   |   ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 2",
    ]);
    expectBridgeOrder(log, "[ O |   | O | O ]", "[   | O |   |   ]");
  });

  test("4. 1번 실패 / 게임 종료(Q) (1 시도)", () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1, 1]);
    mockQuestions(["4", "U", "D", "D", "Q"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[ O |   |   ]",
      "[   | O | X ]",
      "게임 성공 여부: 실패",
      "총 시도한 횟수: 1",
    ]);
    expectBridgeOrder(log, "[ O |   |   ]", "[   | O | X ]");
  });

  test("5. 2번 실패 / 2번 재시도(R) / 성공 (3 시도)", () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1, 1, 0, 0]);
    mockQuestions([
      "6",
      "U",
      "D",
      "D",
      "R",
      "U",
      "D",
      "U",
      "D",
      "R",
      "U",
      "D",
      "U",
      "U",
      "D",
      "D",
    ]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[ O |   | O | O |   |   ]",
      "[   | O |   |   | O | O ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 3",
    ]);
    expectBridgeOrder(
      log,
      "[ O |   | O | O |   |   ]",
      "[   | O |   |   | O | O ]"
    );
  });
});
