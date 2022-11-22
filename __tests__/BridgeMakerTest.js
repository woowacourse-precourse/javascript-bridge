const BridgeMaker = require("../src/BridgeMaker");

describe("BridgeMaker 사용 테스트", () => {
  test("다리 생성 테스트", () => {
    const randomNumbers = [1, 1, 1];
    const mockGenerator = randomNumbers.reduce(
      (acc, number) => acc.mockReturnValueOnce(number),
      jest.fn()
    );

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "U", "U"]);
  });

  test("다리 생성 테스트", () => {
    const randomNumbers = [0, 0, 0];
    const mockGenerator = randomNumbers.reduce(
      (acc, number) => acc.mockReturnValueOnce(number),
      jest.fn()
    );

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["D", "D", "D"]);
  });
});
