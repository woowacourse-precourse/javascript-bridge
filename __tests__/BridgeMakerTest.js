const BridgeMaker = require("../src/BridgeMaker");
const { generate } = require("../src/BridgeRandomNumberGenerator");

describe("다리 생성 테스트", () => {
  test("다리 생성 테스트", () => {
    const mockGenerator = [1, 0, 0, 1, 1].reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());
    const bridge = BridgeMaker.makeBridge(5, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D", "U", "U"]);
  });
});
