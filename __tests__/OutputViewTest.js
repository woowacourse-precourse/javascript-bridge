const OutputView = require("../src/OutputView");
const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE_GAME_START } = require("../src/Utils");

const getSpyOn = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const logSpy = getSpyOn();

describe("OutputView 객체 테스트", () => {
  beforeEach(() => {
    logSpy.mockClear();
  });

  test("게임 시작 안내 문구를 출력한다.", () => {
    OutputView.printStart();
    expect(logSpy).toHaveBeenCalledWith(MESSAGE_GAME_START);
  });

  test("현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.", () => {
    OutputView.printMap("U", "O");
    expect(logSpy).toHaveBeenCalledWith(`[ O ]\n[   ]`);

    OutputView.printMap("U", "O");
    expect(logSpy).toHaveBeenCalledWith(`[ O | O ]\n[   |   ]`);

    OutputView.printMap("D", "X");
    expect(logSpy).toHaveBeenCalledWith(`[ O | O |   ]\n[   |   | X ]`);
  });

  test("게임 결과를 출력한다.", () => {
    OutputView.printResult("성공", 2);
    expect(logSpy).not.toHaveBeenCalledWith(
      expect.stringContaining(`게임 성공 여부 : 성공\n총 시도한 횟수: 2`)
    );
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(`게임 성공 여부: 성공\n총 시도한 횟수: 2`)
    );
  });
});
