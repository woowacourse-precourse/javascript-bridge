const MissionUtils = require('@woowacourse/mission-utils');

const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

describe('다리 길이 테스트', () => {
  test('(다리 길이가 3일 때) 랜덤 배열 체크하기', () => {
    const randoms = ['1', '0', '1'];

    const bridgeLength = '3';

    mockRandoms(randoms);

    const testData = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate
    );

    expect(testData).toEqual(['U', 'D', 'U']);
  });

  test('(다리 길이가 3일 때) 랜덤 배열 체크하기', () => {
    const randoms = ['1', '0', '1', '1'];

    const bridgeLength = '4';

    mockRandoms(randoms);

    const testData = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate
    );

    expect(testData).toEqual(['U', 'D', 'U', 'U']);
  });
});
