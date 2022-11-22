const { Console } = require("@woowacourse/mission-utils");
const InputView = require("../src/InputView");

const mockReadLine = (inputs) => {
  Console.readLine = jest.fn();
  inputs.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

const logSpy = jest.spyOn(Console, "print");

describe("InputView 객체 테스트", () => {
  beforeEach(() => {
    logSpy.mockClear();
  });

  test("유효한 다리의 길이가 입력될 때까지 예외를 발생시키고 유효한 값을 반환한다.", () => {
    mockReadLine(["d", "1", "3.14", "5"]);

    InputView.readBridgeSize(Console.print);

    expect(logSpy).toHaveBeenCalledWith(5);
    expect(logSpy).not.toHaveBeenCalledWith(3.14);
    expect(logSpy).toHaveBeenCalledTimes(5);
  });

  test("유효한 이동할 칸 값이 입력될 때까지 예외를 발생시키고 유효한 값을 반환한다.", () => {
    mockReadLine(["0", "1", "f", "u", "U"]);

    InputView.readMoving(Console.print);

    expect(logSpy).toHaveBeenCalledWith("U");
    expect(logSpy).not.toHaveBeenCalledWith("u");
    expect(logSpy).toHaveBeenCalledTimes(5);
  });

  test("유효한 재시도 여부 값이 입력될 때까지 예외를 발생시키고 유효한 값을 반환한다.", () => {
    mockReadLine(["2", "r", "R"]);

    InputView.readGameCommand(Console.print);

    expect(logSpy).toHaveBeenCalledWith("R");
    expect(logSpy).not.toHaveBeenCalledWith("r");
    expect(logSpy).toHaveBeenCalledTimes(3);
  });
});
