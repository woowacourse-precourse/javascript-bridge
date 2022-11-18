const BridgeMaker = require('../src/BridgeMaker');

describe('BrideMaker', () => {
  test('makeBridge', () => {
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);

    expect(bridge).toEqual(['U', 'D', 'D']);
  });
});
