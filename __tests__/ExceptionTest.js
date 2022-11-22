const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

const mockQuestions = (answers) => {
  console.log(answers);
  MissionUtils.Console.readLine = jest.fn();
  [answers].reduce((acc, input) => {
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

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

describe("예외 테스트", () => {
  test.each([["999"], ["0"], ["hello"], ["#@$$@#"]])(
    "다리 길이로 입력할 수 있는 값은 3 ~ 20 사이의 숫자이다.",
    (inputs) => runException(inputs)
  );

  test.each([["A"], ["Z"], ["hello"], ["4132"], ["@#!%$"]])(
    `이동할 칸의 방향으로 입력할 수 있는 값은 "U" 또는 "D"이다.`,
    (inputs) => runException(inputs)
  );

  test.each([["A"], ["G"], ["bye"], ["777"], ["*^^*"]])(
    `재시도 여부로 입력할 수 있는 값은 "R" 또는 "Q"이다.`,
    (inputs) => runException(inputs)
  );
});
