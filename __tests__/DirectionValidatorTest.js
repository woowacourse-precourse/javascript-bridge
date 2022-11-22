const DirectionValidator = require("../src/utils/DirectionValidator");
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
  DirectionValidator.validate(...inputs);

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const runNormal = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();

  DirectionValidator.validate(...inputs);

  expect(getOutput(logSpy)).toEqual("");
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe("입력에 따른 방향 예외 테스트", () => {
  test.each([[["1"]], [[""]], [["P"]], [["AU"]]])("입력문자가 비정상일 때 체크", (input) =>
    runException(input)
  );

  test.each([[["U"]], [["D"]]])("입력문자가 정상일 때 체크", (input) => runNormal(input));
});
