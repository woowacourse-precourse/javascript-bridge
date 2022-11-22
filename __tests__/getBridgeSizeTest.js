const MissionUtils = require("@woowacourse/mission-utils");
const GameController = require("../src/Controller/GameController");

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
  const gameController = new GameController();
  gameController.getBridgeSize();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe('다리 길이 입력 예외 테스트', () => {
  test("숫자가 아닌 문자를 입력한 경우", () => {
    runException(["?"]);
  });

  test("정수가 아닌 실수를 입력한 경우", () => {
    runException(["3.5"]);
  });

  test("범위를 벗어난 숫자를 입력한 경우", () => {
    runException(["21"]);
  });
});