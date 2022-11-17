const OutputView = require("../src/OutputView");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

let logSpy;
beforeEach(() => {
  logSpy = getLogSpy();
});

describe("출력 테스트", () => {
  test("다리 출력 테스트 1", () => {
    OutputView.printMap(["U", "D", "U"], ["U", "D", "U"]);
    const log = getOutput(logSpy);
    expectBridgeOrder(log, "[ O |   | O ]", "[   | O |   ]");
  });
  test("다리 출력 테스트 2", () => {
    OutputView.printMap(["U", "D", "U"], ["U", "D", "D"]);
    const log = getOutput(logSpy);
    expectBridgeOrder(log, "[ O |   |   ]", "[   | O | X ]");
  });
  describe("성공여부 테스트", () => {
    test("실패 잘나오나 테스트", () => {
      OutputView.printIsSuccess(["U", "D", "U"], ["U", "D", "D"]);
      const log = getOutput(logSpy);
      expectLogContains(log, ["게임 성공 여부: 실패"]);
    });
    test("성공 잘나오나 테스트", () => {
      OutputView.printIsSuccess(["U", "D", "U"], ["U", "D", "U"]);
      const log = getOutput(logSpy);
      expectLogContains(log, ["게임 성공 여부: 성공"]);
    });
  });
  test("결과 출력 테스트", () => {
    OutputView.printResult(["U", "D", "U"], ["U", "D", "U"], 1);
    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[ O |   | O ]",
      "[   | O |   ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 1",
    ]);
  });
});
