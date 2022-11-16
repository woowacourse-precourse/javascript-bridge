const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");

describe("다리 건너기 테스트", () => {
  test("다리 생성 테스트", () => {
    const randoms = ["1", "1", "0"];
    const mockGenerator = randoms.reduce(
      (acc, number) => acc.mockReturnValueOnce(number),
      jest.fn(),
    );

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "U", "D"]);
  });
});