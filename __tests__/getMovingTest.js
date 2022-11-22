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
  gameController.getMoving();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe('이동할 칸 입력 예외 테스트(U 또는 D가 아닌 다른 문자 입력)', () => {
  test('소문자 u를 입력한 경우', () => {
    runException(['u']);
  });

  test('특수문자를 입력한 경우', () => {
    runException(['?']);
  });

  test('숫자를 입력한 경우', () => {
    runException(['5']);
  });
});