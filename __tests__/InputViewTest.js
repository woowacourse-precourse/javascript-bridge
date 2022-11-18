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

const spy = jest.spyOn(Console, "print");

describe("InputView 객체 테스트", () => {
  beforeEach(() => {
    spy.mockClear();
  });

  test("유효한 다리의 길이가 입력될 때까지 예외를 발생시키고 유효한 값을 반환한다.", () => {
    mockReadLine(["d", "1", "3.14", "5"]);

    expect(InputView.readBridgeSize()).resolves.toBe(5);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  test("유효한 이동할 칸 값이 입력될 때까지 예외를 발생시키고 유효한 값을 반환한다.", () => {
    mockReadLine(["0", "1", "f", "u", "U"]);

    expect(InputView.readMoving()).resolves.toBe("U");
    expect(spy).toHaveBeenCalledTimes(4);
  });

  test("유효한 재시도 여부 값이 입력될 때까지 예외를 발생시키고 유효한 값을 반환한다.", () => {
    mockReadLine(["2", "r", "R"]);

    expect(InputView.readGameCommand()).resolves.toBe("R");
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
