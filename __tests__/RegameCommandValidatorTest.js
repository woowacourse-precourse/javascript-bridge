const RegameCommandValidator = require("../src/utils/RegameCommandValidator");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  RegameCommandValidator.validate(...inputs);

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const runNormal = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  RegameCommandValidator.validate(...inputs);

  expect(getOutput(logSpy)).toEqual("");
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe("입력에 따른 재시작 여부 예외 처리 테스트", () => {
  test.each([[["3"]], [["5"]], [["11"]], [["20"]]])("비정상적 입력일 때", (input) =>
    runException(input)
  );

  test.each([[["R"]], [["Q"]]])("정상적 입력일 때", (input) => runNormal(input));
});
