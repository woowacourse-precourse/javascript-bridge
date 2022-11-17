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

describe("InputView 클래스 테스트", () => {
  test("입력받은 다리 길이의 예외상황 발생시 에러를 출력한다.", () => {
    expect(() => InputView.validateBridgeSize(NaN)).toThrow();
    expect(() => InputView.validateBridgeSize(1)).toThrow();
    expect(() => InputView.validateBridgeSize(3.14)).toThrow();
    expect(() => InputView.validateBridgeSize(5)).not.toThrow();
  });

  test("유효한 다리의 길이가 입력될 때까지 예외를 발생시키고 유효한 값을 반환한다.", () => {
    mockReadLine(["d", "1", "3.14", "5"]);
    const spy = jest.spyOn(Console, "print");
    expect(InputView.readBridgeSize()).resolves.toBe(5);
    expect(spy).toHaveBeenCalledTimes(3);
  });
});
