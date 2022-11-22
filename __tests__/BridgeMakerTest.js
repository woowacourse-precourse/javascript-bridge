const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

describe("BridgeMaker 테스트", () => {
  test("랜덤으로 생성되는 다리 배열을 확인한다.", () => {
    const randoms = [1, 1, 0, 1];
    const size = "4";

    mockRandoms(randoms);

    const randomBridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);

    expect(randomBridge).toEqual(["U", "U", "D", "U"]);
  });

  test("랜덤으로 생성되는 다리 배열을 확인한다.", () => {
    const randoms = 1;

    expect(BridgeMaker.changeToUpOrDown(randoms)).toBe("U");
  });


});