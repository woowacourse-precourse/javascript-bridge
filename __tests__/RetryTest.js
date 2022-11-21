const BridgeGameController = require('../src/controller/BridgeGameController.js');

describe('재시도 테스트', () => {
  test('bridgeGame 의 turn 필드가 리셋되는지 테스트', () => {
    const bridgeGameController = new BridgeGameController();
    bridgeGameController.retry();
    expect(bridgeGameController.bridgeGame.turn).toEqual(0);
  });

  test('stepResult의 upperBridge 필드가 리셋되는지 테스트', () => {
    const bridgeGameController = new BridgeGameController();
    bridgeGameController.retry();
    expect(bridgeGameController.stepResult.upperBridge).toEqual('');
  });

  test('stepResult의 lowerBridge 필드가 리셋되는지 테스트', () => {
    const bridgeGameController = new BridgeGameController();
    bridgeGameController.retry();
    expect(bridgeGameController.stepResult.lowerBridge).toEqual('');
  });
});
