const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const BridgeMaker = require("../src/BridgeMaker");
const InputView = require("../src/InputView");

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
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D"]);
  });

  test("기능 테스트", () => {
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

  // test("기능 테스트2", () => { // 실패 테스트
  //   const logSpy = getLogSpy();
  //   mockRandoms(["1", "0", "1", "1"]); 
  //   mockQuestions(["4", "U", "D", "U", "D", "Q"]); 

  //   const app = new App();
  //   app.play();

  //   const log = getOutput(logSpy);
  //   expectLogContains(log, 
  //     [
  //       "[ O |   | O |   ]", 
  //       "[   | O |   | X ]",
  //       "게임 성공 여부: 실패",
  //       "총 시도한 횟수: 1",
  //   ]);
  //   expectBridgeOrder(log, "[ O |   | O | X ]", "[   | O |   | X ]");
  // });

  // test("기능 테스트3", () => { // 재시도 후 성공 테스트
  //   const logSpy = getLogSpy();
  //   mockRandoms(["1", "0", "1", "1"]); 
  //   mockQuestions(["4", "U", "D", "U", "D", "R","U", "D", "U", "U"]); 

  //   const app = new App();
  //   app.play();

  //   const log = getOutput(logSpy);
  //   expectLogContains(log, 
  //     [
  //       "[ O |   | O |   ]", 
  //       "[   | O |   | X ]",
  //       "[ O |   | O | O ]",
  //       "[   | O |   |   ]",
  //       "게임 성공 여부: 성공",
  //       "총 시도한 횟수: 2",
  //   ]);
  //   expectBridgeOrder(log, "[ O |   | O | X ]", "[   | O |   | X ]","[ O |   | O | O ]","[   | O |   |   ]");
  // });

  // test("기능 테스트4", () => { // 재시도 후 실패 테스트
  //   const logSpy = getLogSpy();
  //   mockRandoms(["1", "0", "1", "1"]); 
  //   mockQuestions(["4", "U", "D", "U", "D", "R","U", "U", "Q"]); 

  //   const app = new App();
  //   app.play();

  //   const log = getOutput(logSpy);
  //   expectLogContains(log, 
  //     [
  //       "[ O |   | O |   ]", 
  //       "[   | O |   | X ]",
  //       "[ O | X ]",
  //       "[   |   ]",
  //       "게임 성공 여부: 실패",
  //       "총 시도한 횟수: 2",
  //   ]);
  //   expectBridgeOrder(log, "[ O |   | O | X ]", "[   | O |   | X ]","[ O | X ]","[   |   ]");
  // });

  test("예외 테스트", () => {
    runException(["a"]);
  });

  test("다리의 길이가 범위내의숫자가아니면 예외발생", () => {
    expect(() => {
      InputView.checkBridgeSize(1);
    }).toThrow('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  });

  test("게임여부 예외발생", () => {
    expect(() => {
      InputView.checkCommand(1);
    }).toThrow('[ERROR] 게임여부는 "R"와 "Q" 두 값중 하나여야합니다.');
  });
});
