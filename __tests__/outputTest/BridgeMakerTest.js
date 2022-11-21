const BridgeMaker = require("../../src/BridgeMaker");

describe("다리 생성 메소드 테스트", () => {
  test("다리 생성 테스트", () => {
    const randomNumbers = ["0", "1", "0", "0"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(4, mockGenerator);
    expect(bridge).toEqual(["D", "U", "D", "D"]);
  });
});
