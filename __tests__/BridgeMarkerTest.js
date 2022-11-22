const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('BridgeMarker 테스트', () => {
  beforeEach(() => {
    mockRandoms([0, 1, 1]);
  });

  it('bridge 생성 테스트', () => {
    const size = 3;
    const makeBridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate,
    );

    const expectedBridgeValue = ['D', 'U', 'U'];

    expect(makeBridge).toHaveLength(size);
    expect(makeBridge).toEqual(expectedBridgeValue);
  });
});
