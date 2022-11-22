const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const MissionUtils = require("@woowacourse/mission-utils");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("BridgeMaker 테스트", () => {
  test("다리 생성 테스트", () => {
    const inputBridge = [1, 0, 1, 0];
    const outputBridge = ["U", "D", "U", "D"];
    mockRandoms(inputBridge);

    const output = BridgeMaker.makeBridge(
      4,
      BridgeRandomNumberGenerator.generate
    );
    expect(output).toEqual(outputBridge);
  });
});
