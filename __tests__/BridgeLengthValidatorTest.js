const BridgeLengthValidator = require("../src/utils/BridgeLengthValidator");
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
  BridgeLengthValidator.validate(inputs);

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const runNormal = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  BridgeLengthValidator.validate(inputs);

  expect(getOutput(logSpy)).toEqual("");
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe("입력에 따른 다리 생성 테스트", () => {
  test.each([[["a"]], [["12.5"]], [[" "]], [[""]]])(
    "입력숫자가 정수인 숫자가 아닌지 체크",
    (input) => runException(input)
  );

  test.each([[["1"]], [["2"]], [["21"]], [["25"]]])("입력숫자가 유효한 범위 인지 체크", (input) =>
    runException(input)
  );

  test.each([[["3"]], [["5"]], [["11"]], [["20"]]])("입력숫자가 정상일 때", (input) =>
    runNormal(input)
  );
});
