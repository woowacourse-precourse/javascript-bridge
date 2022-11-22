const BridgeGameStatus = require('../../src/models/status/BridgeGameStatus');

describe('다리 건너기 게임 상태 클래스 테스트', () => {
  const bridgeGameStatus = new BridgeGameStatus();

  beforeAll(() => {
    bridgeGameStatus.increaseLocation();
    bridgeGameStatus.increaseLocation();
    bridgeGameStatus.increaseLocation();
  });

  test('마지막 위치와 현재 위치가 같고 건너지 못했다면 false', () => {
    const result = bridgeGameStatus.isWin(3, false);

    expect(result).toEqual(false);
  });

  test('마지막 위치와 현재 위치가 같고 건넜다면 true', () => {
    const result = bridgeGameStatus.isWin(3, true);

    expect(result).toEqual(true);
  });

  test.each([[true], [false]])(
    '마지막 위치와 현재 위치가 다르면 건너기 성공 유무와 상관없이 false',
    (isCrossed) => {
      const result = bridgeGameStatus.isWin(4, isCrossed);

      expect(result).toEqual(false);
    },
  );
});
