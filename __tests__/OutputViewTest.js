const MissionUtils = require("@woowacourse/mission-utils");
const OutputView = require("../src/OutputView");

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

describe("Outview 테스트", () => {
  const map = { 1: [ "O", " ", "O" ] , 0: [ " ", "O", " " ] }
  test("지도 출력 테스트", () => {
    const logSpy = getLogSpy();
    OutputView.printMap(map);
    const log = getOutput(logSpy);
    expectBridgeOrder(log, "[ O |   | O ]", "[   | O |   ]");
  });

  test("결과 출력 테스트", () => {
    const logSpy = getLogSpy();
    OutputView.printResult({map, count: 1, isCorrect: true});
    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[ O |   | O ]",
      "[   | O |   ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 1",
    ]);
    expectBridgeOrder(log, "[ O |   | O ]", "[   | O |   ]");
  });
});