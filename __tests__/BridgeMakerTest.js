const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

const mockGenerator = (randomNumbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  randomNumbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

describe('다리 생성 테스트', () => {
  test('다리 길이가 3일 때', () => {
    const randomNumbers = ['1', '0', '0'];
    const length = 3;
    mockGenerator(randomNumbers);

    const bridge = BridgeMaker.makeBridge(
      length,
      BridgeRandomNumberGenerator.generate
    );
    expect(bridge).toEqual(['U', 'D', 'D']);
  });

  test('다리 길이가 5일 때', () => {
    const randomNumbers = ['1', '0', '0', '1', '1'];
    const length = 5;
    mockGenerator(randomNumbers);

    const bridge = BridgeMaker.makeBridge(
      length,
      BridgeRandomNumberGenerator.generate
    );
    expect(bridge).toEqual(['U', 'D', 'D', 'U', 'U']);
  });
});
