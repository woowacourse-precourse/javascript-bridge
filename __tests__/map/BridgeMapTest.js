const BridgeMap = require('../../src/models/map/BridgeMap');

describe('다리 지도 클래스 테스트', () => {
  test('초기 지도 상태 테스트', () => {
    const bridgeMap = new BridgeMap();
    const result = bridgeMap.getState();

    expect(result).toStrictEqual([]);
  });

  test('건너는데 성공하면 true 추가', () => {
    const bridgeMap = new BridgeMap();
    bridgeMap.addIsCrossed(true);
    const result = bridgeMap.getState();

    expect(result).toStrictEqual([true]);
  });

  test('건너는데 실패하면 false 추가', () => {
    const bridgeMap = new BridgeMap();
    bridgeMap.addIsCrossed(false);
    const result = bridgeMap.getState();

    expect(result).toStrictEqual([false]);
  });

  test('다리를 선택하지 않았다면 null 추가', () => {
    const bridgeMap = new BridgeMap();
    bridgeMap.addNotSelected();
    const result = bridgeMap.getState();

    expect(result).toStrictEqual([null]);
  });

  test('지도 초기화', () => {
    const bridgeMap = new BridgeMap();
    bridgeMap.addNotSelected();
    bridgeMap.reset();
    const result = bridgeMap.getState();

    expect(result).toStrictEqual([]);
  });
});
