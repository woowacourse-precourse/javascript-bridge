const Bridge = require('../../src/domain/Bridge');
const { mockRandoms } = require('../ApplicationTest');

describe('다리 메서드 테스트', () => {
  test('다리를 잘 생성하는지, 다리 길이를 잘 반환하는지 테스트', () => {
    const bridgeMap = [1, 0, 1, 0];
    mockRandoms(bridgeMap);

    const bridge = new Bridge();
    bridge.setBridgeLength(bridgeMap.length);
    expect(bridge.getBridgeLength()).toEqual(bridgeMap.length);
  });

  test('건널 수 있는 다리인지 여부를 잘 반환하는지(정답)', () => {
    mockRandoms([1, 0, 1]);

    const bridge = new Bridge();
    bridge.setBridgeLength(3);
    expect(bridge.isMovable('D', 1)).toBeTruthy();
  });

  test('건널 수 있는 다리인지 여부를 잘 반환하는지(오답)', () => {
    mockRandoms([1, 0, 1]);

    const bridge = new Bridge();
    bridge.setBridgeLength(3);
    expect(bridge.isMovable('D', 0)).toBeFalsy();
  });

  test('다리의 일부를 잘 반환하는지 테스트', () => {
    const bridgeMap = [1, 0, 1, 0];
    mockRandoms(bridgeMap);

    const bridge = new Bridge();
    bridge.setBridgeLength(bridgeMap.length);
    expect(bridge.getPartialBridgeMap(1)).toEqual(['U', 'D']);
  });
});
