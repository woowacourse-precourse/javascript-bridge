const BridgeMap = require("../src/BridgeMap");
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
const expectBridgeOrder = (received, upside) => {
  expect(received).toEqual(upside);
};

describe("bridgeMap 클래스 테스트", () => {
  const bridgeMap = new BridgeMap();
  //updateMyPositionForward 테스트
  test("입력과 정답 여부에 따른 다리 그림 테스트", () => {
    let logSpy = getLogSpy();
    bridgeMap.updateMyPositionForward("U", " O ");
    OutputView.printMap(bridgeMap.getMyBridgeMap());
    let log = getOutput(logSpy);

    expectBridgeOrder(log, "[ O ][   ]");

    logSpy = getLogSpy();
    bridgeMap.updateMyPositionForward("U", " O ");
    OutputView.printMap(bridgeMap.getMyBridgeMap());
    log = getOutput(logSpy);

    expectBridgeOrder(log, "[ O | O ][   |   ]");

    logSpy = getLogSpy();
    bridgeMap.updateMyPositionForward("D", " O ");
    OutputView.printMap(bridgeMap.getMyBridgeMap());
    log = getOutput(logSpy);

    expectBridgeOrder(log, "[ O | O |   ][   |   | O ]");

    logSpy = getLogSpy();
    bridgeMap.updateMyPositionForward("D", " X ");
    OutputView.printMap(bridgeMap.getMyBridgeMap());
    log = getOutput(logSpy);

    expectBridgeOrder(log, "[ O | O |   |   ][   |   | O | X ]");
  });
});
