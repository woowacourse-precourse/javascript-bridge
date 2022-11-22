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

describe("입력 예외테스트", () => {
  test("다리 길이 입력 예외테스트", () => {
    mockQuestions([2]);
    const logSpy = getLogSpy();
    const app = new App();

    app.play();

    expectLogContains(getOutput(logSpy), [
      "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
    ]);
  });

  test("이동할 칸 입력 예외테스트", () => {
    mockQuestions([3, "W"]);
    const logSpy = getLogSpy();
    const app = new App();

    app.play();

    expectLogContains(getOutput(logSpy), ["[ERROR] U 또는 D를 입력해 주세요."]);
  });

  test("게임 재시작 여부 입력 예외테스트", () => {
    mockRandoms([1, 0, 1]);
    mockQuestions([3, "D", "E"]);
    const logSpy = getLogSpy();
    const app = new App();

    app.play();

    expectLogContains(getOutput(logSpy), ["[ERROR] R 또는 Q를 입력해 주세요."]);
  });
});
