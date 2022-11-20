const BridgeMaker = require("../src/BridgeMaker");

describe("다리 생성 테스트", () => {
  test("다리 생성 테스트1", () => {
    const randomNumbers = ["0", "0", "0"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["D", "D", "D"]);
  });

  test("다리 생성 테스트2", () => {
    const randomNumbers = ["0", "0", "0", "1", "1"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(5, mockGenerator);
    expect(bridge).toEqual(["D", "D", "D", "U", "U"]);
  });
});
