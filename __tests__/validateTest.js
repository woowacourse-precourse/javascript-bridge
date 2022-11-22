const MissionUtils = require("@woowacourse/mission-utils");
const {
  checkBridgeSize,
  checkMovement,
  checkRestart,
} = require("../src/validate");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("다리 길이 테스트", () => {
  test("다리 길이는 정수 숫자여야 한다.", () => {
    const logSpy = getLogSpy();

    checkBridgeSize(5.1);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
  test("다리 길이는 3~20이여야 한다.", () => {
    const logSpy = getLogSpy();

    checkBridgeSize(2);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
  test("다리 길이는 3~20이여야 한다.", () => {
    const logSpy = getLogSpy();

    checkBridgeSize(21);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});

describe("이동할 칸 선택 테스트", () => {
  test("U나 D를 입력해야한다.", () => {
    const logSpy = getLogSpy();

    checkMovement("A");
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("U나 D를 입력해야한다.", () => {
    const logSpy = getLogSpy();

    checkMovement("1");
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});

describe("게임 종료 여부 테스트", () => {
  test("R이나 Q를 입력해야한다.", () => {
    const logSpy = getLogSpy();

    checkRestart("T");
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
  test("R이나 Q를 입력해야한다.", () => {
    const logSpy = getLogSpy();

    checkRestart("0");
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});

MissionUtils.Console.close();
