const BridgeGameStatus = require('../src/BridgeGameStatus');

describe('다리 게임 초기 설정 테스트', () => {
  const size = 5;
  const bridgeGameStatus = new BridgeGameStatus(size);

  test('U와 D로 이루어진 정답 다리를 생성한다.', () => {
    const bridge = bridgeGameStatus.getBridge();

    bridge.forEach((value) => {
      expect(['D', 'U']).toContain(value);
    });
  });

  test('원하는 초기 값으로 게임 상태가 설정된다.', () => {
    const gameStatus = bridgeGameStatus.getGameStatus();
    const initValue = { accMoveCount: 0, curMoveCount: 0, movedRoutes: [] };

    expect(gameStatus).toEqual(initValue);
  });
});
