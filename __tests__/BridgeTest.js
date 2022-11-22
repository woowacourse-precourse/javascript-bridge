const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');
const BridgeMaker = require('../src/BridgeMaker');
const MissionUtils = require('@woowacourse/mission-utils');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('다리 생성', () => {
  test('랜덤넘버 생성기 테스트', () => {
    const validateNumbers = [0, 1];
    for (let i = 0; i < 100; i++) {
      const number = BridgeRandomNumberGenerator.generate();
      expect(validateNumbers.includes(number)).toBe(true);
    }
  });

  test('다리 생성 길이 테스트', () => {
    for (let size = 3; size < 20; size++) {
      const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
      expect(bridge.length).toBe(size);
    }

    let size = [21, 22, -1, 0];
    size.forEach((value) => {
      expect(() => BridgeMaker.makeBridge(value, BridgeRandomNumberGenerator.generate)).toThrowError();
    });
  });

  test('다리 생성 결과 테스트', () => {
    mockRandoms([0, 0, 0]);
    const bridge = BridgeMaker.makeBridge(3, BridgeRandomNumberGenerator.generate);
    expect(bridge).toEqual(['D', 'D', 'D']);
  });
});
