const GameInit = {
  init() {
    GameStatus.step = 0;
    GameStatus.tried = 1;
    GameStatus.alive = true;
  },
}

const GameStatus = {
  step: 0,
  tried: 1,
  alive: true,
  size: 0,
  lastMove: 0,
  bridge: [],
}

module.exports = { GameInit, GameStatus }