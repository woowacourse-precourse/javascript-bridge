const BridgeGame = require('../src/BridgeGame');
const BridgeMaker = require('../src/BridgeMaker');

describe('다리 게임 생성', () => {
  test('다리의 길이는 3이상 20이하여야 합니다.', () => {
    const randomNumbers = [1, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());
    expect(() => {
      const bridge = BridgeMaker.makeBridge(2, mockGenerator);
      const bridgeGame = new BridgeGame(bridge);
    }).toThrow();
  });
});
