const BridgeMaker = require('../src/BridgeMaker');
const Bridge = require('../src/models/Bridge');

const mockBridgeClass = (bridge) => {
  BridgeMaker.makeBridge = jest.fn();
  BridgeMaker.makeBridge.mockReturnValueOnce(bridge);
  const bridgeClass = new Bridge(3);
  return bridgeClass;
};

const bridgeClassForTest = mockBridgeClass(['U', 'D', 'U']);

describe('Bridge 클래스 테스트', () => {
  test('이동에 따른 올바른 결과 반환 테스트', () => {
    expect(bridgeClassForTest.checkMove('U', 0)).toEqual(['U', true]);
  });

  test('다리 길이 반환 테스트', () => {
    expect(bridgeClassForTest.bridgeLength).toEqual(3);
  });
});

module.exports = bridgeClassForTest;
