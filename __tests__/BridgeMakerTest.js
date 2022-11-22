const MissionUtils = require("@woowacourse/mission-utils");

const BridgeMaker = require("../src/BridgeMaker");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("BridgeMaker 객체 테스트", () => {
  test("makeBridge 함수 테스트: result", () => {
    mockRandoms(["1", "0", "1"]);

    const bridge = BridgeMaker.makeBridge(3, MissionUtils.Random.pickNumberInRange);

    expect(bridge).toEqual(["U", "D", "U"]);
  });

  test("makeBridge 함수 테스트: length", () => {
    const bridge = BridgeMaker.makeBridge(20, () => 1);
    expect(bridge).toHaveLength(20);
  });
});
