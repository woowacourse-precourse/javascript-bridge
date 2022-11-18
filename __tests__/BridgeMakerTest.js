const BridgeMaker = require('../src/BridgeMaker');
const { generate } = require('../src/BridgeRandomNumberGenerator');

const ERROR_MESSAGE = require('../src/utils/ErrorMessage');

describe('다리 생성 테스트', () => {
  test.each([[['1', '0', '0'], 3, ['U', 'D', 'D']],
    [['1', '1', '0', '0'], 4, ['U', 'U', 'D', 'D']],
    [['1', '0', '0', '1', '1'], 5, ['U', 'D', 'D', 'U', 'U']]])(
    '다리 생성 테스트',
    (random, input, result) => {
      const randomNumbers = random;
      const mockGenerator = randomNumbers
        .reduce((acc, number) => acc.mockReturnValueOnce(number), jest.fn());

      const bridge = BridgeMaker.makeBridge(input, mockGenerator);
      expect(bridge).toEqual(result);
    },
  );
  test.each([['2'], ['21'], ['-1'], ['a'], ['U']])(
    '숫자가 아니거나 다리 길이 범위를 벗어날 경우 예외가 발생한다.',
    (input) => {
      expect(() => BridgeMaker.makeBridge(input, generate))
        .toThrow(ERROR_MESSAGE.bridgeLengthRange);
    },
  );
});
