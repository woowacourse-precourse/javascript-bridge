const { Tile } = require('../../src/constants');
const Bridge = require('../../src/domains/Bridge');
const ValidationError = require('../../src/errors/ValidationError');

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

  test('배열이 아닌 값을 넣었을 때 예외가 잘 발생하는지', () => {
    expect(() => {
      new Bridge(1234);
    }).toThrow(ValidationError);
  });

  test('지정된 타일 이외에 잘못된 값을 넣었을 때 예외가 잘 발생하는지', () => {
    const tiles = [Tile.UP, Tile.UP, Tile.DOWN, '#', Tile.UP];

    expect(() => {
      new Bridge(tiles);
    }).toThrow(ValidationError);
  });
});
