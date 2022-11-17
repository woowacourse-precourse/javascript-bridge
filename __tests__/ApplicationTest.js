/* eslint-disable */

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

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

// received = "최종 게임 결과[ O |   | O ][   | O |   ]게임 성공 여부: 성공총 시도한 횟수: 1"
// logs     = ["최종 게임 결과", "[ O |   | O ]", "[   | O |   ]", "게임 성공 여부: 성공", "총 시도한 횟수: 1"]
const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

// received = "최종 게임 결과[ O |   | O ][   | O |   ]게임 성공 여부: 성공총 시도한 횟수: 1"
// upside   = "[ O |   | O ]"
// downside = "[   | O |   ]"
const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);       // 8
  const downsideIndex = received.indexOf(downside);   // 21

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe("다리 건너기 테스트", () => {
  test("다리 생성 테스트", () => {
    const randomNumbers = ["1", "0", "0"];      // 위 - 아래 - 아래
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);   // mock function에 대한 한 번의 호출에 대해 반환된 값을 지정 ("1", "0", "0" 순으로 값을 리턴)
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D"]);    // 위 - 아래 - 아래
  });

  test("기능 테스트", () => {
    const logSpy = getLogSpy();           // spyOn: print
    mockRandoms(["1", "0", "1"]);         // mock: pickNumberInRange
    mockQuestions(["3", "U", "D", "U"]);  // mock: readLine

    const app = new App();
    app.play();

    const log = getOutput(logSpy);  // log = "최종 게임 결과[ O |   | O ][   | O |   ]게임 성공 여부: 성공총 시도한 횟수: 1"
    expectLogContains(log, [
      "최종 게임 결과",
      "[ O |   | O ]",
      "[   | O |   ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 1",
    ]);
    expectBridgeOrder(log, "[ O |   | O ]", "[   | O |   ]");
  });

  // 첫 입력에서 예외 (다리 사이즈 입력 예외)
  test("예외 테스트", () => {
    runException(["a"]);
  });
});
