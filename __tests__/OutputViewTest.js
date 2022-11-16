const { OutputView, MESSAGE_START } = require("../src/OutputView");
const { Console } = require("@woowacourse/mission-utils");

const getSpyOn = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("OutputView 클래스 테스트", () => {
  test("게임 시작 안내 문구를 출력한다.", () => {
    const logSpy = getSpyOn();
    OutputView.printStart();
    expect(logSpy).toHaveBeenCalledWith(MESSAGE_START);
  });
});
