const { describe, expect, test } = require('@jest/globals');
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
