const bridgeMaker = require('../src/BridgeMaker');
const bridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('BridgeMaker 테스트', () => {
  test('0인 경우 아래 칸(D)', () => {
    expect(bridgeMaker.convertDorU(0)).toEqual('D');
  });

  test('1인 경우 위 칸(U)', () => {
    expect(bridgeMaker.convertDorU(1)).toEqual('U');
  });

  test.each([
    [5, 5],
    [10, 10],
    [20, 20]
  ])('입력받은 길이에 해당하는 다리 생성', (input, expected) => {
    expect(bridgeMaker.makeBridge(input, bridgeRandomNumberGenerator)).toHaveLength(expected);
  });
});
