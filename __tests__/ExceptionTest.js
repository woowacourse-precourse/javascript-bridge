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

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), [
    "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  ]);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe("예외 처리 케이스(사이즈 입력 실패)", () => {
  test.each([["a"], ["2"], ["21"], ["-1"]])('"%s"', (input) => {
    runException([input]);
  });
});

describe("게임 도중 예외 처리 케이스", () => {
  test("게임 내 발생하는 입력 실수", () => {
    const logSpy = getLogSpy();
    mockRandoms(["1", "1", "1", "0"]);
    mockQuestions(["4", "a", "U", "D", "Q"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "[ERROR] 이동할 칸은 U 혹은 D로 입력해주세요.",
      "최종 게임 결과",
      "[ O |   ]",
      "[   | X ]",
      "게임 성공 여부: 실패",
      "총 시도한 횟수: 1",
    ]);
  });
});

describe("게임 도중 예외 처리 케이스", () => {
  test("게임 내 발생하는 입력 실수", () => {
    const logSpy = getLogSpy();
    mockRandoms(["1", "1", "1", "0"]);
    mockQuestions(["4", "12", "U", "D", "Q"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "[ERROR] 이동할 칸은 U 혹은 D로 입력해주세요.",
      "최종 게임 결과",
      "[ O |   ]",
      "[   | X ]",
      "게임 성공 여부: 실패",
      "총 시도한 횟수: 1",
    ]);
  });
});

describe("실패 후 게임 선택에서의 케이스", () => {
  test('실패 후 "U" 입력 예외 처리', () => {
    const logSpy = getLogSpy();
    mockRandoms(["1", "1", "1"]);
    mockQuestions(["3", "D", "U", "Q"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[   ]",
      "[ X ]",
      "[ERROR] 재시작하려면 R, 종료하려면 Q를 입력해주세요.",
      "게임 성공 여부: 실패",
      "총 시도한 횟수: 1",
    ]);
  });
});
