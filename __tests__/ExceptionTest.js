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

describe("예외처리 테스트", () => {
  test("반복적인 입력오류 및 한 번에 클리어", () => {
    const logSpy = getLogSpy();
    mockRandoms(["0", "0", "1", "0", "1"]);
    mockQuestions(["length", "5", "D", "X", "D", "U", "냠", "D", "위 아래 위위 아래", "U"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "[ERROR]",
      "최종 게임 결과",
      "[   |   | O |   | O ]",
      "[ O | O |   | O |   ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 1",
    ]);
    expectBridgeOrder(log, "[   |   | O |   | O ]", "[ O | O |   | O |   ]");
  });

  test("반복적인 입력오류가 동반된 4회차 도전 클리어", () => {
    const logSpy = getLogSpy();
    mockRandoms(["0", "0", "1", "0", "1"]);
    mockQuestions(["length", "5", "D", "X", "U", "R", "D", "X", "U", "R", "U", "R", "D", "X", "D", "U", "냠", "D", "위 아래 위위 아래", "U"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "[ERROR]",
      "최종 게임 결과",
      "[   |   | O |   | O ]",
      "[ O | O |   | O |   ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 4",
    ]);

    expectBridgeOrder(log, "[   |   | O |   | O ]", "[ O | O |   | O |   ]");
  });


  test("반복적인 입력오류가 동반된 3회차 도전 중단", () => {
    const logSpy = getLogSpy();
    mockRandoms(["1", "0", "0", "1"]);
    mockQuestions(["GGYU", "4", "D", "X", "R", "U", "U", "R", "U", "X", "D", "D", "D","Q"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "[ERROR]",
      "최종 게임 결과",
      "[ O |   |   |   ]",
      "[   | O | O | X ]",
      "게임 성공 여부: 실패",
      "총 시도한 횟수: 3",
    ]);

    expectBridgeOrder(log, "[ O |   |   |   ]", "[   | O | O | X ]");
  });
});