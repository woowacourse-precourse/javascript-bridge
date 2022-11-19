const BridgeGame = require('../src/BridgeGame');

describe('BridgeGame 클래스 테스트', () => {
  test('checkMovement, setBridgeForm 메서드 테스트', () => {
    const bridgeGame = new BridgeGame(3);
    const testBridge = ['U', 'D', 'U'];
    const testInput = 'U';
    const testPlayerAt = 0;
    bridgeGame.checkMovement(testInput, testBridge, testPlayerAt);
    bridgeGame.setBridgeForm(testInput);
    bridgeGame.checkSuccessFail();
    const testBridgeUpper = bridgeGame.getBridgeUpper();
    const testBridgeLower = bridgeGame.getBridgeLower();
    expect(testBridgeUpper[0]).toEqual(' O ');
    expect(testBridgeLower[0]).toEqual('   ');
  });

  test('checkSuccessFail, retry 메서드 테스트', () => {
    const bridgeGame2 = new BridgeGame(3);
    const testBridge = ['U', 'D', 'U'];
    const testInput = 'D';
    const testPlayerAt = 0;
    bridgeGame2.checkMovement(testInput, testBridge, testPlayerAt);
    bridgeGame2.checkSuccessFail();
    const testWinStatus = bridgeGame2.getGameWin();
    expect(testWinStatus).toBeFalsy();

    bridgeGame2.retry();
    const resetBridgeUpper = bridgeGame2.getBridgeUpper();
    const resetBridgeLower = bridgeGame2.getBridgeLower();
    const testTrialCount = bridgeGame2.getTrialCount();
    const resetWinStatus = bridgeGame2.getGameWin();
    expect(testTrialCount).toEqual(2);
    expect(resetBridgeUpper).toEqual([]);
    expect(resetBridgeLower).toEqual([]);
    expect(resetWinStatus).toEqual(undefined);
  });
});
