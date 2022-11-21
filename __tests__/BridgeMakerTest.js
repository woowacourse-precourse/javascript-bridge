const BridgeMaker = require('../src/BridgeMaker');

describe('다리의 길이를 입력받아 다리를 생성하는 객체 테스트', () => {
  test.each([
    [['1', '0', '0'], 3, ['U', 'D', 'D']],
    [['1', '1', '0', '0'], 4, ['U', 'U', 'D', 'D']],
    [['1', '1', '1', '1', '1'], 5, ['U', 'U', 'U', 'U', 'U']],
    [['0', '0', '0', '0', '0'], 5, ['D', 'D', 'D', 'D', 'D']],
  ])(
    '다리의 길이를 입력받아 다리를 생성한다.',
    (randomNumbers, bridgeSize, expected) => {
      const mockGenerator = randomNumbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
      }, jest.fn());

      const bridge = BridgeMaker.makeBridge(bridgeSize, mockGenerator);
      expect(bridge).toEqual(expected);
    },
  );
});
