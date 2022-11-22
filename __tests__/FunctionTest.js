const MissionUtils = require("@woowacourse/mission-utils");
const View = require("../src/UI/View");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const App = require("../src/App");
const Controller = require("../src/Controller");

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

describe("기능 테스트", () => {
  test("다리 길이 테스트", () => {
    const size = 4;

    const bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    expect(bridge.length).toEqual(size);
  });

  test("다리 생성 테스트", () => {
    const randomNumbers = [1, 0, 0, 1];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(4, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D", "U"]);
  });

  test("종료 테스트", () => {
    const logSpy = getLogSpy();
    mockQuestions(["Q"]);

    View.gameCommand(new Controller().askRetry("Q"));

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "게임 성공 여부: 실패",
      "총 시도한 횟수: 1",
    ]);
  });

  test("총 시도한 횟수 테스트", () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(["3", "D", "R", "U", "D", "U"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, ["게임 성공 여부: 성공", "총 시도한 횟수: 2"]);
  });
});
