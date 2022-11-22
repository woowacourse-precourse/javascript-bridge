const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("../src/BridgeGame");
const { printMap } = require("../src/View/OutputView");

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

describe("BridgeGame 클래스 테스트", () => {
  test("start() - 재시도 시 테스트", () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 1, 0, 1]);
    mockQuestions(["D", "U", "U", "R", "D", "U", "D", "U"]);

    const game = new BridgeGame(4);
    game.start();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[   | O |   | O ]",
      "[ O |   | O |   ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 2",
    ]);
  });

  test("setCommand - 게임 다시 시도 테스트", () => {
    const logSpy = getLogSpy();
    mockQuestions(["R", "R"]);
    const game = new BridgeGame(4);
    game.setCommand();
    game.setCommand();
    expect(game.getTryCount()).toEqual(3);
  });
});
