const { Tile } = require('../../src/constants');
const Bridge = require('../../src/domains/Bridge');

describe('Bridge 클래스 테스트', () => {
  test('다리의 길이를 잘 반환하는지', () => {
    const tiles = [Tile.UP, Tile.DOWN, Tile.UP, Tile.UP];
    const bridge = new Bridge(tiles);

    expect(bridge.getSize()).toBe(4);
  });

  test('특정 타일을 잘 반환하는지', () => {
    const tiles = [Tile.UP, Tile.DOWN, Tile.UP, Tile.UP];
    const bridge = new Bridge(tiles);

    expect(bridge.getTileAt(1)).toBe(Tile.DOWN);
  });

  test('타일 전체를 잘 반환하는지', () => {
    const tiles = [Tile.UP, Tile.DOWN, Tile.UP, Tile.UP];
    const bridge = new Bridge(tiles);

    expect(bridge.getTiles()).toEqual(tiles);
  });
});
