const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('다리 생성 테스트', () => {
  test('다리 길이 입력만큼의 다리가 생성되었는지 확인', () => {
    const bridge = BridgeMaker.makeBridge(6, BridgeRandomNumberGenerator.generate);
    expect(bridge.length).toEqual(6);
  });
});
