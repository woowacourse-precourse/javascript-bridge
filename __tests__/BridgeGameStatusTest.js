const BridgeGameStatus = require('../src/models/BridgeGameStatus');

describe('다리 건너기 게임 상태 클래스 테스트', () => {
  test('위치의 초기값은 -1', () => {
    const bridgeGameStatus = new BridgeGameStatus();
    const result = bridgeGameStatus.getLocation();

    expect(result).toEqual(-1);
  });

  test('시도 횟수 초기값은 0', () => {
    const bridgeGameStatus = new BridgeGameStatus();
    const result = bridgeGameStatus.getTryCount();

    expect(result).toEqual(0);
  });

  test('다리 위치 증가', () => {
    const bridgeGameStatus = new BridgeGameStatus();
    bridgeGameStatus.increaseLocation();
    const result = bridgeGameStatus.getLocation();

    expect(result).toEqual(0);
  });

  test('시도 횟수 증가', () => {
    const bridgeGameStatus = new BridgeGameStatus();
    bridgeGameStatus.increaseTryCount();
    const result = bridgeGameStatus.getTryCount();

    expect(result).toEqual(1);
  });

  test('시도 횟수 초기화', () => {
    const bridgeGameStatus = new BridgeGameStatus();
    bridgeGameStatus.increaseLocation();
    bridgeGameStatus.increaseLocation();
    bridgeGameStatus.resetLocation();
    const result = bridgeGameStatus.getLocation();

    expect(result).toEqual(-1);
  });
});
