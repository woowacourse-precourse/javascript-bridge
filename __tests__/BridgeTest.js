const BridgeMaker = require('../src/BridgeMaker');

describe('다리 테스트', () => {
  test('다리 생성 테스트', () => {
    const randomNumbers = ['1', '0', '1'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'U']);
  });
});
