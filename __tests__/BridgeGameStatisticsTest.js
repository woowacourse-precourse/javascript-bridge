const BridgeGameStatistics = require('../src/Model/BridgeGameStatistics');

describe('BridgeGameStatistics 테스트', () => {
  test('시도한 횟수를 3번 증가', () => {
    const bridgeSize = 5;
    const statistics = new BridgeGameStatistics();
    statistics.setBridgeSize(bridgeSize);
    statistics.increaseAttempt();
    statistics.increaseAttempt();
    statistics.increaseAttempt();
    expect(statistics.getAttempt()).toBe(3);
  });

  test('다리 끝까지 도달했는지 확인(게임 성공)', () => {
    const bridgeSize = 5;
    const statistics = new BridgeGameStatistics();
    statistics.setBridgeSize(bridgeSize);
    for (let i = 0; i < bridgeSize; i++) {
      statistics.increaseMoveCount();
    }

    expect(statistics.isGameSuccess()).toBeTruthy();
  });
});
