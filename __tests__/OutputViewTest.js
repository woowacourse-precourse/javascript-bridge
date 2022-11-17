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

describe("출력 테스트", () => {
  test("다리 출력 테스트 1", () => {
    const logSpy = getLogSpy();
    OutputView.printMap(["U", "D", "U"], ["U", "D", "U"]);
    const log = getOutput(logSpy);
    expectBridgeOrder(log, "[ O |   | O ]", "[   | O |   ]");
  });
  test("다리 출력 테스트 2", () => {
    const logSpy = getLogSpy();
    OutputView.printMap(["U", "D", "U"], ["U", "D", "D"]);
    const log = getOutput(logSpy);
    expectBridgeOrder(log, "[ O |   |   ]", "[   | O | X ]");
  });
});
