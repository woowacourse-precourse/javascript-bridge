const BridgeMaker = require('../src/BridgeMaker');

const table = [
  [[1, 0, 0], 3, ['U', 'D', 'D']],
  [[0, 1, 0, 1], 4, ['D', 'U', 'D', 'U']],
  [[0, 0, 0, 1, 1], 5, ['D', 'D', 'D', 'U', 'U']],
];

describe('다리 생성 테스트', () => {
  test.each(table)('다리 생성 테스트', (randomNumbers, size, expected) => {
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(size, mockGenerator);
    expect(bridge).toEqual(expected);
  });
});
