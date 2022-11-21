const MissionUtils = require("@woowacourse/mission-utils");
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

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe("진행 상황 테스트", () => {
  test("시도 횟수 일치 및 진행 상황 일치 테스트 1", () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(["3", "D", "R", "U", "U", "R", "U", "D", "U"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "[   ]",
      "[ X ]",
      "[ O ]",
      "[   ]",
      "[ O | X ]",
      "[   |   ]",
      "[ O ]",
      "[   ]",
      "[ O |   ]",
      "[   | O ]",
      "[ O |   | O ]",
      "[   | O |   ]",
      "최종 게임 결과",
      "[ O |   | O ]",
      "[   | O |   ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 3",
    ]);
  });

  test("시도 횟수 일치 및 진행 상황 일치 테스트 2", () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1, 1, 0]);
    mockQuestions(["5", "U", "D", "D", "R", "U", "D", "U", "D", "Q"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "[ O ]",
      "[   ]",
      "[ O |   ]",
      "[   | O ]",
      "[ O |   |   ]",
      "[   | O | X ]",
      "[ O ]",
      "[   ]",
      "[ O |   ]",
      "[   | O ]",
      "[ O |   | O ]",
      "[   | O |   ]",
      "[ O |   | O |   ]",
      "[   | O |   | X ]",
      "최종 게임 결과",
      "[ O |   | O |   ]",
      "[   | O |   | X ]",
      "게임 성공 여부: 실패",
      "총 시도한 횟수: 2",
    ]);
  });
});
