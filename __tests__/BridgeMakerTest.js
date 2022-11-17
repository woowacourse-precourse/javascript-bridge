const bridgeMaker = require('../src/BridgeMaker');
const bridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('BridgeMaker 테스트', () => {
  test('0인 경우 아래 칸(D)', () => {
    expect(bridgeMaker.convertDorU(0)).toEqual('D');
  });

  test('1인 경우 위 칸(U)', () => {
    expect(bridgeMaker.convertDorU(1)).toEqual('U');
  });

  test('입력받은 길이에 해당하는 다리 생성', () => {
    expect(bridgeMaker.makeBridge(10, bridgeRandomNumberGenerator)).toHaveLength(10);
  });
});
