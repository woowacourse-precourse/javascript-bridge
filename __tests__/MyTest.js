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

describe("예외 처리 테스트", () => {

  test("생성할 다리 길이 3이상 20이하의 숫자가 아니면 예외 처리", () => {
    runException(["40"]);
  });

  test("라운드마다 플레이가 입력하는 값이 U나 D가 아닌 경우 예외 처리", () => {
    runException(["3", "F"]);
  });

  // test("게임을 다시 시도할지에 대한 입력이 R이나 Q가 아닌 경우 예외 처리", () => {
  //   runException([]);
  // });

  test("다리 길이 입력에 실수가 들어오는 경우 예외 처리", () => {
    runException(["5.5"]);
  });
});
