const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

describe("다리 건너기 테스트", () => {
  test("다리 생성 길이 테스트", () => {
    const size = 3;
    expect(BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate).length).toBe(size);
  });

  test("다리 생성 UPDOWN 테스트", () => {
    const upDownMock = jest.fn();

    expect(BridgeMaker.makeBridge(1, upDownMock.mockReturnValueOnce(0))).toEqual(["U"]);
  });
});
