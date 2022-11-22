const deepFreeze = require('./utils/deepFreeze');

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

const Survived = {
  YES: 'O',
  NO: 'X',
};

module.exports = deepFreeze({
  Tile,
  SPAWNABLE_TILES,
  BridgeSize,
  GameCommand,
  Survived,
});
