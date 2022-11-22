const { Tile } = require('../../src/constants');
const Moving = require('../../src/domains/Moving');
const ValidationError = require('../../src/errors/ValidationError');

describe('Moving 클래스 테스트', () => {
  test('기본 동작 테스트', () => {
    const moving = new Moving(Tile.UP, false);

    expect(moving.getTile()).toBe(Tile.UP);
    expect(moving.isSurvived()).toBe(false);
  });

  test('잘못된 값 테스트', () => {
    expect(() => {
      new Moving('#', true);
    }).toThrow(ValidationError);

    expect(() => {
      new Moving(Tile.DOWN, 12);
    }).toThrow(ValidationError);
  });
});
