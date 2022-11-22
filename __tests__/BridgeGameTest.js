const BridgeGame = require('../src/BridgeGame');

describe('다리 모델 테스트', () => {
  test('다리 사이즈에 따른 생성길이 테스트', () => {
    const bridgeModel = new BridgeGame();
    const bridgeSize = 5;
    const bridge = bridgeModel.setBridge(bridgeSize);

    expect(bridge.length).toEqual(bridgeSize);
  });

  test('재도전에 따른 변수 설정 테스트', () => {
    const bridgeModel = new BridgeGame();
    const trials = 3;

    for (let trial = 1; trial < trials; trial++) {
      bridgeModel.retry();
    }

    expect(bridgeModel.trial).toEqual(trials);
    expect(bridgeModel.upCounter).toEqual([]);
    expect(bridgeModel.downCounter).toEqual([]);
  });

  test('마지막 라운드인지 반환하는 테스트', () => {
    const bridgeModel = new BridgeGame();
    const bridgeSize = 3;
    bridgeModel.setBridge(bridgeSize);

    const results = [false, false, true];

    results.forEach((result, pointer) => {
      expect(bridgeModel.isFinalMove(pointer)).toEqual(result);
    });
  });
});
