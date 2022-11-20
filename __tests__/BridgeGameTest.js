const BridgeGame = require('../src/domain/BridgeGame');

describe('BridgeGame 클래스 테스트', () => {
  test('⭐ 사이즈 크기 만큼의 게임 맵이 만들어집니다.', () => {
    const bridgeGame = new BridgeGame();
    const mapSize = 3;

    expect(bridgeGame.makeBridgeMap(mapSize).length).toBe(mapSize);
  });

  test('⭐ 게임 맵 테스트 : makeBridgeMap 메서드 테스트 U와 D로 이루어진 게임 맵을 반환합니다. ', () => {
    const bridgeGame = new BridgeGame();
    const bridgeMap = [
      ['U', 'U', 'D'],
      ['U', 'U', 'U'],
      ['D', 'D', 'D'],
      ['D', 'U', 'D'],
    ];
    const mapSize = 3;

    const mockFn = jest.fn(bridgeGame.makeBridgeMap);
    bridgeMap.forEach((map, idx) => {
      mockFn.mockReturnValue(map);
      expect(mockFn(mapSize)).toEqual(bridgeMap[idx]);
    });
  });
});
