const { makeBridge } = require('../src/BridgeMaker');
const { generate } = require('../src/BridgeRandomNumberGenerator');

describe('다리 만드는 함수 테스트', () => {
  test('makeBridge 함수는 배열을 리턴해야 한다.', () => {
    const bridge = makeBridge(4, generate);
    expect(bridge).toBeInstanceOf(Array);
  });

  test.each([4, 12, 20])('makeBridge는 size 길이의 배열을 리턴해야 한다.', (size) => {
    const bridge = makeBridge(size, generate);
    expect(bridge).toHaveLength(size);
  });
});
