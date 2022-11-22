const { Tile } = require('../../src/constants');
const Bridge = require('../../src/domains/Bridge');
const Player = require('../../src/domains/Player');
const BridgeError = require('../../src/errors/BridgeError');

describe('Player 클래스 테스트', () => {
  test('기본 동작 테스트', () => {
    const bridge = new Bridge([Tile.UP, Tile.DOWN, Tile.UP]);
    const player = new Player(bridge);

    expect(player.isArrived()).toBe(false);
    expect(player.getNextPosition()).toBe(0);

    expect(player.move(Tile.UP)).toBe(true);
    expect(player.isArrived()).toBe(false);

    expect(player.move(Tile.DOWN)).toBe(true);
    expect(player.move(Tile.UP)).toBe(true);
    expect(player.isArrived()).toBe(true);
  });

  test('다음 위치를 잘 반환하는지', () => {
    const bridge = new Bridge([Tile.UP, Tile.DOWN, Tile.UP]);
    const player = new Player(bridge);

    expect(player.getNextPosition()).toBe(0);
    player.move(Tile.UP);
    expect(player.getNextPosition()).toBe(1);
  });

  test('움직임이 잘 기록되는지', () => {
    const bridge = new Bridge([Tile.UP, Tile.DOWN, Tile.UP, Tile.UP]);
    const player = new Player(bridge);

    player.move(Tile.UP);
    player.move(Tile.DOWN);
    player.move(Tile.DOWN);

    const movingHistory = player
      .getMovingHistory()
      .map((moving) => [moving.getTile(), moving.isSurvived()]);

    expect(movingHistory).toEqual([
      [Tile.UP, true],
      [Tile.DOWN, true],
      [Tile.DOWN, false],
    ]);
  });

  test('이미 도착한 후에도 움직였을 때 예외가 발생하는지', () => {
    const bridge = new Bridge([Tile.UP, Tile.DOWN]);
    const player = new Player(bridge);

    player.move(Tile.UP);
    player.move(Tile.DOWN);

    expect(() => player.move(Tile.UP)).toThrow(BridgeError);
  });
});
