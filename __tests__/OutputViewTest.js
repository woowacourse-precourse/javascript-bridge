const MissionUtils = require("@woowacourse/mission-utils");
const OutputView = require("../src/views/OutputView");

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

describe("printMap 메소드 테스트", () => {
  test("맵 출력 테스트", () => {
    const logSpy = getLogSpy();
    OutputView.printMap(new Map([
      ['U', ['O', ' ', 'X']],
      ['D', [' ', 'O', ' ']],
    ]));
    const log = getOutput(logSpy);
    expectLogContains(log, [
      "[ O |   | X ]",
      "[   | O |   ]",
    ]);
    expectBridgeOrder(log, "[ O |   | X ]", "[   | O |   ]");
  });
});

describe("printResult 메소드 테스트", () => {
  test("최종 결과 출력 테스트", () => {
    const logSpy = getLogSpy();
    const result = {
      map: new Map([
        ['U', ['O', ' ', 'X']],
        ['D', [' ', 'O', ' ']],
      ]),
      attempts: 1,
    };
    OutputView.printResult(result, false);
    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[ O |   | X ]",
      "[   | O |   ]",
      "게임 성공 여부: 실패",
      "총 시도한 횟수: 1",
    ]);
    expectBridgeOrder(log, "[ O |   | X ]", "[   | O |   ]");
  });
});

describe("printErrorMessage 메소드 테스트", () => {
  test("에러 메시지 출력 테스트", () => {
    const logSpy = getLogSpy();
    const err = new Error("[ERROR] 에러 테스트");
    OutputView.printErrorMessage(err.message);
    const log = getOutput(logSpy);
    expectLogContains(log, [
      "[ERROR] 에러 테스트"
    ]);
  });
});
