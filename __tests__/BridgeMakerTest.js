const BridgeMaker = require("../src/BridgeMaker");

describe("다리 생성 기능 테스트", () => {
  test("다리를 형성할 숫자를 U, D로 반환", () => {
    expect(BridgeMaker.convertNumberToBridge(0)).toEqual("D");
    expect(BridgeMaker.convertNumberToBridge(1)).toEqual("U");
  });

  test("다리를 형성할 숫자가 0이나 1이 아니라면 예외 발생", () => {
    expect(() => BridgeMaker.convertNumberToBridge(3)).toThrow();
    expect(() => BridgeMaker.convertNumberToBridge("a")).toThrow();
  });

  test("숫자 배열을 다리 형태로 반환", () => {
    const TEST_CASE = [
      {
        numbers: [1, 0, 0],
        result: ["U", "D", "D"],
      },
      {
        numbers: [1, 1, 0, 0, 1],
        result: ["U", "U", "D", "D", "U"],
      },
    ];
    TEST_CASE.forEach(({ numbers, result }) => {
      expect(BridgeMaker.makeBridgeByNumbers(numbers)).toEqual(result);
    });
  });
});
