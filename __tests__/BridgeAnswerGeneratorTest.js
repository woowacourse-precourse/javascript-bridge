const BridgeMaker = require("../src/BridgeMaker");

describe("다리 생성 클래스 테스트", () => {
  test("생성 테스트", () => {
    const randomNumbers = [0, 1, 0, 1, 0, 0, 1, 0, 0, 1];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(10, mockGenerator);
    expect(bridge).toEqual(["D", "U", "D", "U", "D", "D", "U", "D", "D", "U"]);
  });
});
