const Validate = require("../src/Validate");

describe("사용자에게 입력받는 값들의 테스트", () => {
  test.each([21, 50, 100]) ("다리 길이가 20보다 크면 예외가 발생한다.", (size) => {
    expect(() => {
      Validate.validateBridgeLength(size);
    }).toThrow("[ERROR]");
  });

  test.each([0, -1, -100]) ("다리 길이가 1보다 작으면 예외가 발생한다.", (size) => {
    expect(() => {
      Validate.validateBridgeLength(size);
    }).toThrow("[ERROR]");
  });

  test("다리 길이에 숫자가 아닌 값을 입력하면 예외가 발생한다.", () => {
    expect(() => {
      Validate.validateBridgeLength(NaN);
    }).toThrow("[ERROR]");
  });

  test.each([1, 10, 20]) ("다리 길이가 1에서 20 사이의 숫자이면 성공한다.", (size) => {
    expect(
      Validate.validateBridgeLength(size)
    ).toBe(size);
  });

  test.each([1, " ", "P"]) ("이동할 칸의 입력이 U 또는 D가 아니면 예외가 발생한다.", (move) => {
    expect(() => {
      Validate.validateMoving(move);
    }).toThrow("[ERROR]");
  });

  test.each(["U", "D"]) ("이동할 칸의 입력이 U 또는 D이면 성공한다.", (move) => {
    expect(
      Validate.validateMoving(move)
    ).toBe(move);
  });
})

