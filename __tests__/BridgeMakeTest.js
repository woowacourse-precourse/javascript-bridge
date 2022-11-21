const BridgeMaker = require('../src/BridgeMaker');

describe('다리 생성 테스트', () => {
  test('다리 생성 테스트 1', () => {
    const bridgeLength = 3;
    const randomNumbers = [1, 1, 1];

    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'U', 'U']);
  });

  test('다리 생성 테스트 2', () => {
    const bridgeLength = 10;
    const randomNumbers = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0];

    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(bridgeLength, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'U', 'D', 'U', 'D', 'U', 'D', 'U', 'D']);
  });

  test('다리 생성 테스트 3', () => {
    const bridgeLength = 3;
    const randomNumbers = [1, 1, 0];

    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(bridgeLength, mockGenerator);
    expect(bridge).not.toEqual(['U', 'D', 'D']);
  });
});
