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

describe("입력값 예외 검증 테스트", () => {
  test("다리 길이 입력시 입력 조건 외 일 경우 예외 테스트", () => {
    runException(["21"]);
  });

  test("다리 길이 입력시 입력값이 1개 이상일 때 예외 테스트", () => {
    runException(["3,4"]);
  });

  test("다리 이동 입력시 입력 조건 외 일 경우 예외 테스트", () => {
    mockRandoms(["1", "0", "1"]);
    runException(["3", "U", "D", "u"]);
  });

  test("다리 이동 입력시 중복값 예외 테스트", () => {
    mockRandoms(["1", "0", "1"]);
    runException(["3", "U", "D", "UU"]);
  });

  test("다리 이동 입력시 한자리가 아닐 경우 예외 테스트", () => {
    mockRandoms(["1", "0", "1"]);
    runException(["3", "U", "D", "UD"]);
  });

  test("재시작 여부 입력시 입력조건 외 일 경우 예외 테스트", () => {
    mockRandoms(["1", "0", "1"]);
    runException(["3", "U", "D", "D", "q"]);
  });

  test("재시작 여부 입력시 중복값 예외 테스트", () => {
    mockRandoms(["1", "0", "1"]);
    runException(["3", "U", "D", "D", "RR"]);
  });

  test("재시작 여부 입력시 한자리가 아닐 경우 예외 테스트", () => {
    mockRandoms(["1", "0", "1"]);
    runException(["3", "U", "D", "D", "RQ"]);
  });
});