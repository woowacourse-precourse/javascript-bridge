const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const BridgeMaker = require("../src/BridgeMaker");
const Validation = require("../src/Validation");
const GamePlaying = require("../src/GamePlaying");
const BridgeGame = require("../src/BridgeGame");
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
});

describe("사용자 입력 테스트", () => {
  test("입력받은 다리의 길이가 숫자가 아닌 경우", () => {
    expect(() => {
      Validation.validBridgeSize("q");
    }).toThrow("숫자 입력이 아님");
  });

  test("입력받은 다리의 길이가 3이상 20미만이 아닌 경우", () => {
    expect(() => {
      Validation.validBridgeSize("2");
    }).toThrow("3~20 사이의 숫자가 아님");
  });

  test("칸 이동시 U, D 입력이 아닌 경우", () => {
    expect(() => {
      Validation.validMovePoint("Z");
    }).toThrow("U 또는 D가 아님");
  });

  test("재시작 여부 R, Q 입력이 아닌 경우", () => {
    expect(() => {
      Validation.validreadGameCommand("s");
    }).toThrow("R 또는 Q가 아님");
  });
});

describe("로직 테스트", () => {
  test("장애물 충돌 테스트", () => {
    const bridgeGame = new BridgeGame();
    const bool = bridgeGame.move("D");
    expect(bool).toBe(false);
  });

  test("다리 기록 테스트", () => {
    const bridgeGame = new BridgeGame();
    const gameMap = bridgeGame.bridgeDrawing("D", true);
    expect(gameMap).toEqual(["[ O ]", "[   ]"]);
  });

  test("게임 종료 테스트", () => {
    mockQuestions(["Q"]);
    const result = GamePlaying.requestGame();
    expect(result).toBe(false);
  });

  test("재시작 테스트", () => {
    mockQuestions(["R"]);
    const result = GamePlaying.requestGame();
    expect(result).toBe(true);
  });
});
