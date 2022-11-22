const BridgeMaker = require("../src/BridgeMaker");

describe("BridgeMaker 오브젝트 테스트", () => {
  test("makeBridge 메서드 테스트-1", () => {
    const randomNumbers = ["1", "1", "0"];
    const mockGenerator = randomNumbers.reduce(
      (acc, number) => acc.mockReturnValueOnce(number),
      jest.fn(),
    );

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "U", "D"]);
  });

  test("makeBridge 메서드 테스트-2", () => {
    const randomNumbers = ["1", "0", "1", "0"];
    const mockGenerator = randomNumbers.reduce(
      (acc, number) => acc.mockReturnValueOnce(number),
      jest.fn(),
    );

    const bridge = BridgeMaker.makeBridge(4, mockGenerator);
    expect(bridge).toEqual(["U", "D", "U", "D"]);
  });
});
