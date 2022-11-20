const BridgeGame = require('../src/domain/BridgeGame');

describe('BridgeGame 클래스 테스트', () => {
  test('⭐ 사이즈 크기 만큼의 게임 맵이 만들어집니다.', () => {
    const bridgeGame = new BridgeGame();
    const mapSize = 3;

    expect(bridgeGame.makeBridgeMap(mapSize).length).toBe(mapSize);
  });
});
