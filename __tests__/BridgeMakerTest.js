const BridgeMaker = require("../src/BridgeMaker");

describe("다리 생성 기능 테스트", () => {
  test("길이가 4인 다리 생성", () => {
    const randomNumbers = [0, 0, 1, 1];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(4, mockGenerator);
    expect(bridge).toEqual(["D", "D", "U", "U"]);
  });

  test("길이가 7인 다리 생성", () => {
    const randomNumbers = [0, 0, 1, 0, 1, 0, 1];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(7, mockGenerator);
    expect(bridge).toEqual(["D", "D", "U", "D", "U", "D", "U"]);
  });
});
