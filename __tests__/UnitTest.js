const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');
const InputVaildator = require('../src/InputVaildator');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('Vaildator 단위 테스트', () => {
  test('입력한 길이가 유효한지 판단하는 기능', () => {
    expect(InputVaildator.isVaildLength('5')).toEqual(true);
    expect(InputVaildator.isVaildLength('35.1')).toEqual(false);
    expect(InputVaildator.isVaildLength('-1')).toEqual(false);
    expect(InputVaildator.isVaildLength('0')).toEqual(false);
  });

  test('다음 다리 건너기 입력이 유효한 값인지 판단하는 기능', () => {
    expect(InputVaildator.isVaildStep('U')).toEqual(true);
    expect(InputVaildator.isVaildStep('D')).toEqual(true);
    expect(InputVaildator.isVaildStep('Z')).toEqual(false);
  });
});

describe('BridgeMaker 단위 테스트', () => {
  test('길이만큼 랜덤한 다리를 생성하는 기능', () => {
    mockRandoms([0, 1, 1, 0, 0, 1]);
    expect(
      BridgeMaker.makeBridge(6, BridgeRandomNumberGenerator.generate)
    ).toEqual(['D', 'U', 'U', 'D', 'D', 'U']);
  });
});
