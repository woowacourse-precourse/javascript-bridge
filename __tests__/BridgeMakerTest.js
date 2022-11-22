const { describe, expect, test } = require('@jest/globals');
const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('../src/BridgeMaker');
const { generate } = require('../src/BridgeRandomNumberGenerator');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('무작위 값을 생성해주는 함수 호출 테스트', () => {
  test.each([[3], [5], [12]])(
    '무작위 값을 생성해주는 함수는 다리의 size만큼 호출된다. size: %d',
    (size) => {
      const generateSpy = jest.spyOn(BridgeRandomNumberGenerator, 'generate');

      BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);

      expect(generateSpy).toHaveBeenCalledTimes(size);

      generateSpy.mockClear();
    }
  );
});

describe('반환값 길이 테스트', () => {
  test.each([[12], [10], [17]])(
    '반환값의 길이는 첫 번째 매개변수인 size의 값이다. size: %d',
    (size) => {
      expect(BridgeMaker.makeBridge(size, generate)).toHaveLength(size);
    }
  );
});

describe('반환값 테스트', () => {
  test.each([
    [[1, 0, 0], 3, ['U', 'D', 'D']],
    [[1, 0, 1, 0], 4, ['U', 'D', 'U', 'D']],
    [
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      10,
      ['D', 'D', 'D', 'D', 'D', 'U', 'U', 'U', 'U', 'U'],
    ],
    [[0, 0, 0], 3, ['D', 'D', 'D']],
  ])(
    '%p를 순서대로 받아 다리를 생성한다. BridgeMaker.makeBridge(%d, generate)',
    (numbers, size, result) => {
      MissionUtils.Random.pickNumberInRange = jest.fn();
      numbers.reduce((acc, cur) => {
        return acc.mockReturnValueOnce(cur);
      }, MissionUtils.Random.pickNumberInRange);

      expect(BridgeMaker.makeBridge(size, generate)).toEqual(result);
    }
  );
});
