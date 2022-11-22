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

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

describe("다리 건너기 도메인 로직 테스트", () => {
  test("기능 테스트 - 1 재시도 후 성공한 테스트", () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 0]);
    mockQuestions(["3", "U", "U", "R", "U", "D", "D"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "다리 건너기 게임을 시작합니다.",
      "[ O ]",
      "[   ]",
      "[ O | X ]",
      "[   |   ]",
      "[ O ]",
      "[   ]",
      "[ O |   ]",
      "[   | O ]",
      "[ O |   |   ]",
      "[   | O | O ]",
      "최종 게임 결과",
      "[ O |   |   ]",
      "[   | O | O ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 2",
    ]);
  });

  test("기능 테스트 - 2 종료 후 실패한 테스트", () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 0]);
    mockQuestions(["3", "U", "U", "Q"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "다리 건너기 게임을 시작합니다.",
      "[ O ]",
      "[   ]",
      "[ O | X ]",
      "[   |   ]",
      "최종 게임 결과",
      "[ O | X ]",
      "[   |   ]",
      "게임 성공 여부: 실패",
      "총 시도한 횟수: 1",
    ]);
  });

  test("기능 테스트 - 3 재시도 후 성공한 테스트 + 다리 길이 에러 테스트 포함", () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1, 0, 0]);
    mockQuestions(["1", "5", "U", "U", "R", "U", "D", "U", "D", "D"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "다리 건너기 게임을 시작합니다.",
      "Error: [ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
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
      "[ O |   | O |   ]",
      "[   | O |   | O ]",
      "[ O |   | O |   |   ]",
      "[   | O |   | O | O ]",
      "최종 게임 결과",
      "[ O |   | O |   |   ]",
      "[   | O |   | O | O ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 2",
    ]);
  });
});
