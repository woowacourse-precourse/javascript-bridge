const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("BridgeMaker 클래스 테스트", () => {
  test("입력값에 대해 변환이 잘 되는지 테스트", () => {
    const size = 3;
    const RandomNumber = [1, 1, 0];
    const transfer = ['U', 'U', 'D'];
    mockRandoms(RandomNumber);

    expect(BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate)).toEqual(transfer);
  });

  test("입력값에 대해 변환이 잘 되는지 테스트", () => {
    const size = 8;
    const RandomNumber = [1, 1, 1, 1, 0, 0, 0, 0];
    const transfer = ['U', 'U', 'U', 'U', 'D', 'D', 'D', 'D'];
    mockRandoms(RandomNumber);

    expect(BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate)).toEqual(transfer);
  });

  test("입력값에 대해 변환이 잘 되는지 테스트", () => {
    const size = 20;
    const RandomNumber = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const transfer = ['U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D'];
    mockRandoms(RandomNumber);

    expect(BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate)).toEqual(transfer);
  });
});