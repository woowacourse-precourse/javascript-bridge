const GameMap = require('../src/model/GameMap');

describe('🗺 GameMap 클래스 테스트', () => {
  test('⭐ 만들어진 게임 맵 길이가 반환됩니다.', () => {
    const gameMap = new GameMap();
    gameMap.setBridgeGameMap(['U', 'U', 'D']);

    expect(gameMap.getMapLength()).toBe(3);
  });

  test('⭐ 만들어진 게임 맵 카피본이 반환됩니다.', () => {
    const gameMap = new GameMap();
    gameMap.setBridgeGameMap(['U', 'U', 'D']);

    expect(gameMap.getGameMap()).toEqual(['U', 'U', 'D']);
  });
});
