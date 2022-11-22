const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");
const App = require("../src/App");

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

describe("게임 재시작 테스트", () => {
  // test("재시작1", () => {
  //   const logSpy = getLogSpy();
  //   mockRandoms([1, 0, 1]);
  //   mockQuestions(["3", "D", "R", "U", "D", "U"]);

  //   const app = new App();
  //   app.play();

  //   const log = getOutput(logSpy);
  //   expectLogContains(log, [
  //     "최종 게임 결과",
  //     "[   ]",
  //     "[ X ]",
  //     "[ O |   | O ]",
  //     "[   | O |   ]",
  //     "게임 성공 여부: 성공",
  //     "총 시도한 횟수: 2",
  //   ]);
  //   expectBridgeOrder(log, "[ O |   | O ]", "[   | O |   ]");
  // });
  // test("재시작2", () => {
  //   const logSpy = getLogSpy();
  //   mockRandoms([1, 1, 0, 0, 1]);
  //   mockQuestions(["5", "U", "D", "R", "U", "U", "U", "R", "U", "U", "D", "D", "U"]);

  //   const app = new App();
  //   app.play();

  //   const log = getOutput(logSpy);
  //   expectLogContains(log, [
  //     "최종 게임 결과",
  //     "[ O |   ]",
  //     "[   | X ]",
  //     "[ O | O | X ]",
  //     "[   |   |   ]",
  //     "[ O | O |   |   | O ]",
  //     "[   |   | O | O |   ]",
  //     "게임 성공 여부: 성공",
  //     "총 시도한 횟수: 3",
  //   ]);
  //   expectBridgeOrder(log, "[ O | O |   |   | O ]", "[   |   | O | O |   ]");
  // });
  test("게임 실패 후 재시작 없는 테스트", () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(["3", "D", "Q"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[   ]",
      "[ X ]",
      "게임 성공 여부: 실패",
      "총 시도한 횟수: 1",
    ]);
    expectBridgeOrder(log, "[   ]", "[ X ]");
  });

  
});
