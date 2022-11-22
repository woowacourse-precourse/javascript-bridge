const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const { returnCheckedMap } = require("../src/OutputView");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
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

describe("다리 상태 반환 테스트", () => {
  test("case 1", () => {
    const bridge = ["U", "D", "D"];
    const tempPosition = 1;
    const status = false;
    expect(returnCheckedMap(bridge, tempPosition, status)).toEqual([
      [" O ", " X "],
      ["   ", "   "],
    ]);
  });

  test("case 2", () => {
    const bridge = ["U", "D", "D"];
    const tempPosition = 2;
    const status = true;
    expect(returnCheckedMap(bridge, tempPosition, status)).toEqual([
      [" O ", "   ", "   "],
      ["   ", " O ", " O "],
    ]);
  });

  test("case 3", () => {
    const bridge = ["U", "D", "D", "D", "U", "D"];
    const tempPosition = 2;
    const status = true;
    expect(returnCheckedMap(bridge, tempPosition, status)).toEqual([
      [" O ", "   ", "   "],
      ["   ", " O ", " O "],
    ]);
  });
});

describe("다리 길이 입력 테스트",() => {

  test("case 1) number range", () => {
    runException(["21"]);
  });

  test("case 2) none input", () => {
    runException([""]);
  });

})