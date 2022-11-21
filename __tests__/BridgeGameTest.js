const BridgeGame = require('../src/BridgeGame');

describe('BridgeGame class 테스트 유닛테스트', () => {
  const bridgeGame = new BridgeGame();

  test('bridgeGame 클래스의 bridgeLengthStatus를 0으로 초기화하는 기능', () => {
    bridgeGame.initBridgeLengthStatus();
    const result = bridgeGame.getBridgeLengthStatus();

    expect(result).toBe(0);
  });

  test('bridgeGame 클래스의 bridgeLengthStatus의 값을 얻는 기능', () => {
    bridgeGame.incrementBridgeLengthStatus();

    const result = bridgeGame.getBridgeLengthStatus();

    expect(result).toBe(1);
  });

  test('bridgeGame 클래스의 numberOfTry의 값을 얻는 기능', () => {
    const result = bridgeGame.getNumberOfTry();

    expect(result).toBe(1);
  });

  test('bridgeGame 클래스의 numberOfTry의 값을 1 증가시키는 기능', () => {
    bridgeGame.incrementNumberOfTry();
    const result = bridgeGame.getNumberOfTry();

    expect(result).toBe(2);
  });

  test('bridgeGame 클래스의 lengthStatus의 값을 증가시키는 기능', () => {
    bridgeGame.incrementBridgeLengthStatus();

    const result = bridgeGame.getBridgeLengthStatus();

    expect(result).toBe(2);
  });
});
