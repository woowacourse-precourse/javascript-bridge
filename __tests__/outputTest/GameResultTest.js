const MissionUtils = require("@woowacourse/mission-utils");
const OutputView = require("../../src/OutputView");

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

describe("게임결과 출력메소드 테스트", () => {
  test("3회 시도로 성공할 경우", () => {
    const logSpy = getLogSpy();
    OutputView.printResult(["U", "U", "U", "D"], 3, true); //내가 입력한 이동배열, 총 시도횟수, 게임결과

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[ O | O | O |   ]",
      "[   |   |   | O ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 3",
    ]);
  });
  test("10회 시도로 실패할 경우", () => {
    const logSpy = getLogSpy();
    OutputView.printResult(["U", "U", "D", "U", "D"], 10, false); //내가 입력한 이동배열, 총 시도횟수, 게임결과

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[ O | O |   | O |   ]",
      "[   |   | O |   | X ]",
      "게임 성공 여부: 실패",
      "총 시도한 횟수: 10",
    ]);
  });
});
