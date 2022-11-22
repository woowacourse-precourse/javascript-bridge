const Tile = {
  UP: 'U',
  DOWN: 'D',
};

const SPAWNABLE_TILES = [Tile.DOWN, Tile.UP];

const BridgeSize = {
  LOWER_INCLUSIVE: 3,
  UPPER_INCLUSIVE: 20,
};

const GameCommand = {
  RESET: 'R',
  QUIT: 'Q',
};

module.exports = {
  Tile,
  SPAWNABLE_TILES,
  BridgeSize,
  GameCommand,
};
