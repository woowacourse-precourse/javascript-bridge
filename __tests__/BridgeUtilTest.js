const MissionUtils = require("@woowacourse/mission-utils");
const BridgeUtil = require("../src/BridgeUtil.js");

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

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe("bridgeutil 테스트", () => {
  test("validateUserInput test expected true", () => {
    const validateUserInput = BridgeUtil.validateUserInput(
      ["U", "U", "D", "U"],
      ["U", "U", "D", "U"]
    );
    expect(validateUserInput).toEqual(true);
  });
  test("validateUserInput test expected false", () => {
    const validateUserInput = BridgeUtil.validateUserInput(
      ["U", "D"],
      ["U", "U"]
    );
    expect(validateUserInput).toEqual(false);
  });
  test("printBridge test expected true", () => {
    const logSpy = getLogSpy();

    BridgeUtil.printBridge(["U", "D", "U", "D"], ["U", "D", "U", "D"]);
    const log = getOutput(logSpy);

    expectLogContains(log, ["[ O |   | O |   ]", "[   | O |   | O ]"]);
    expectBridgeOrder(log, "[ O |   | O |   ]", "[   | O |   | O ]");
  });
  test("printBridge test expected false", () => {
    const logSpy = getLogSpy();

    BridgeUtil.printBridge(["U", "D", "U", "U"], ["U", "D", "U", "D"]);
    const log = getOutput(logSpy);

    expectLogContains(log, ["[ O |   | O |   ]", "[   | O |   | X ]"]);
    expectBridgeOrder(log, "[ O |   | O |   ]", "[   | O |   | X ]");
  });
});
