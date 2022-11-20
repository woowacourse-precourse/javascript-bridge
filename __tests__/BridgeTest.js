const MissionUtils = require('@woowacourse/mission-utils');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');
const BridgeMaker = require('../src/BridgeMaker');
const Bridge = require('../src/Bridge');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('Bridge 기능 테스트', () => {
  test('이동 성공 여부 판단', () => {
    mockRandoms([1, 0, 1, 0]);

    const bridgeArray = BridgeMaker.makeBridge(4, BridgeRandomNumberGenerator.generate);
    const bridge = new Bridge(bridgeArray);
    const result = [];

    result.push(bridge.moveSuccess(1, 'U'));
    result.push(bridge.moveSuccess(1, 'D'));
    expect(result).toEqual([false, true]);
  });

  test('길이 확인', () => {
    mockRandoms([1, 0, 1, 0, 1, 1, 0]);

    const bridgeArray = BridgeMaker.makeBridge(7, BridgeRandomNumberGenerator.generate);
    const bridge = new Bridge(bridgeArray);

    expect(bridge.length()).toEqual(7);
  });
});
