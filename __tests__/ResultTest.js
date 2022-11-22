const OutputView = require("../src/view/OutputView");
const MissionUtils = require("@woowacourse/mission-utils");
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

describe("결과 테스트", () => {
  test("실패 결과 출력이 옳바른가?", () => {
    let logSpy = getLogSpy();
    OutputView.printIsGameClear(false);
    let log = getOutput(logSpy);
    expect(log).toEqual(expect.stringContaining("실패"));
  });

  test("성공 결과 출력이 옳바른가?", () => {
    let logSpy = getLogSpy();
    OutputView.printIsGameClear(true);
    let log = getOutput(logSpy);
    expect(log).toEqual(expect.stringContaining("여부: 성공"));
  });
});
